const Mustache = require('mustache');
import templates from './gomokuTemplates.js';
import assets from './gomokuAssets.js';
import '../css/gomoku.css';

/* board module */
const board = (() => {

    let boardSize, board, frontLayer, midLayer, backLayer, background = undefined;
    const wrapper = createBoardWrapper();

    function createBoardWrapper() {
        const target = document.createElement('div');
        target.classList.add('gomokuBoardWrapper');
        return target;
    }

    function drawBackground() {
        background = document.createElement('div');
        background.classList.add('gomokuBoardBackground');
    }

    function drawBackLayer(size) {
        backLayer = document.createElement('div');
        backLayer.classList.add('gomokuBoardBackLayer');
        for (let row = 0; row < size * 2; row++) {
            for (let col = 0; col < size * 2; col++) {
                const grid = document.createElement('div');
                grid.classList.add('grid');
                if (col > 0 && col < size * 2 - 1) {
                    // if (row > 0 && row < (size - 1) * 2) {
                        if (row % 2 === 0) grid.classList.add('borderBottom');
                    // }
                }
                if (row > 0 && row < size * 2 - 1) {
                    // if (col > 0 && col < (size - 1) * 2) {
                        if (col % 2 === 0)  grid.classList.add('borderRight');
                    // }
                }
                backLayer.appendChild(grid);
            }
        }
    }

    function drawMidLayer() {
        midLayer = document.createElement('div');
        midLayer.classList.add('gomokuBoardMidLayer');
        const dot1 = document.createElement('div');
        dot1.classList.add('dot');
        dot1.classList.add('dot1');
        const dot2 = document.createElement('div');
        dot2.classList.add('dot');
        dot2.classList.add('dot2');
        const dot3 = document.createElement('div');
        dot3.classList.add('dot');
        dot3.classList.add('dot3');
        const dot4 = document.createElement('div');
        dot4.classList.add('dot');
        dot4.classList.add('dot4');
        const dot5 = document.createElement('div');
        dot5.classList.add('dot');
        dot5.classList.add('dot5');
        midLayer.appendChild(dot1);
        midLayer.appendChild(dot2);
        midLayer.appendChild(dot3);
        midLayer.appendChild(dot4);
        midLayer.appendChild(dot5);
    }

    function drawFrontLayer(size) {
        frontLayer = document.createElement('div');
        frontLayer.classList.add('gomokuBoardFrontLayer');
        frontLayer.classList.add('showNumber');
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const grid = document.createElement('div');
                grid.classList.add('grid');
                grid.dataset.row = row;
                grid.dataset.col = col;
                frontLayer.appendChild(grid);
            }
        }
        initPhantomPiece();
        initRealPiece();
    }

    function toggleNumber() {
        frontLayer.classList.toggle('showNumber');
    }

    function initPhantomPiece() {
        frontLayer.querySelectorAll('.grid').forEach(grid => {
            grid.addEventListener('mouseenter', (e) => {
                e.stopPropagation();
                players.getCurrentPlayer().placePhantomPiece(grid);
            }, false);
            grid.addEventListener('mouseleave', (e) => {
                e.stopPropagation();
                players.getCurrentPlayer().removePhantomPiece(grid);
            }, false);
        });
    }

    function initRealPiece() {
        frontLayer.querySelectorAll('.grid').forEach(grid => {
            grid.addEventListener('click', (e) => {
                e.stopPropagation();
                players.getCurrentPlayer().placeRealPiece(grid);
            }, false);
        });
    }

    function draw(size) {
        boardSize = size;
        document.querySelector(':root').style.setProperty('--gomoku-size', size);
        board = document.createElement('div');
        board.classList.add('gomokuBoard');
        drawBackground();
        board.appendChild(background);
        drawBackLayer(size);
        board.appendChild(backLayer);
        drawMidLayer(size);
        board.appendChild(midLayer);
        drawFrontLayer(size);
        board.appendChild(frontLayer);
        wrapper.appendChild(board);
    }

    function insertBoard(container) {
        container.appendChild(wrapper);
    }

    function getBoard() {
        return board;
    }

    function gridIsEmpty(grid) {
        const content = grid.querySelector('.piece:not(.phantom)');
        if (content) return false;
        return true;
    }

    function gridHasPhantomPiece(grid) {
        const content = grid.querySelector('.piece.phantom');
        if (content) return true;
        return false;
    }

    function getGrid(row, col) {
        let result = undefined;
        frontLayer.querySelectorAll('.grid').forEach(grid => { 
            if ((grid.dataset.row == row) && (grid.dataset.col == col)) result = grid;
        });
        return result;
    }

    return { draw, insertBoard, toggleNumber, getBoard, gridIsEmpty, gridHasPhantomPiece, getGrid };

})();

/* player factory function 
 * piece is the path to the piece image */
const player = function(inName, inColor, inAudio) {
    const name = inName;
    const pieceColor = inColor;  
    const pieceAudio = inAudio;

    function getName() {
        return name;
    }

    function createPiece() {
        const newPiece = document.createElement('div');
        newPiece.classList.add('piece');
        newPiece.classList.add(pieceColor);
        return newPiece;
    }

    function createRealPiece() {
        const newPiece = createPiece.call(this);
        return newPiece;
    }

    function createPhantomPiece() {
        const newPiece = createPiece.call(this);
        newPiece.classList.add('phantom');
        return newPiece;
    }

    function placePhantomPiece(grid) {
        if (!game.hasWinner() && board.gridIsEmpty(grid)) {
            const newPiece = createPhantomPiece.call(this);
            grid.appendChild(newPiece);
        }
    }

    function removePhantomPiece(grid) {
        const piece = grid.querySelector('.phantom');
        if (piece) grid.removeChild(piece);
    }

    function placeRealPiece(grid) {
        if (!game.hasWinner() && board.gridIsEmpty(grid)) {
            const newPiece = createRealPiece.call(this);
            removePhantomPiece.call(this, grid);
            grid.appendChild(newPiece);
            addIntoPieceMap.call(this, grid);
            game.cachePieces(grid, newPiece);
            playPieceAudio();
            if (checkWin.call(this)) {
                game.announceWinner(this);
            }
            players.alternatePlayer();
        }
    }

    function playPieceAudio() {
        pieceAudio.currentTime = 0;
        pieceAudio.play();
    }

    function removeRealPiece(grid) {
        const piece = grid.querySelector('.piece');
        if (piece) grid.removeChild(piece);
        removeFromPieceMap.call(this, grid);
    }

    function initPieceMap(size) {
        this.pieceMap = [];
        this.pieceMapSize = size;
        for (let row = 0; row < size; row++) {
            this.pieceMap.push([]);
            for (let col = 0; col < size; col++) {
                this.pieceMap[row].push(0);
            }
        }
    }

    function addIntoPieceMap(grid) {
        this.pieceMap[grid.dataset.row][grid.dataset.col] = 1;
    }

    function removeFromPieceMap(grid) {
        this.pieceMap[grid.dataset.row][grid.dataset.col] = 0;
    }

    function checkWin() {
        const rowCount = [];
        const colCount = [];
        for (let i = 0; i < this.pieceMapSize; i++) {
            rowCount.push(0);
            colCount.push(0);
        }
        const diagonalCount = [];
        const antiDiagonalCount = [];
        for (let i = 0; i < this.pieceMapSize * 2 - 1; i++) {
            diagonalCount.push(0);
            antiDiagonalCount.push(0);
        }
        for (let row = 0; row < this.pieceMapSize; row++) {
            for (let col = 0; col < this.pieceMapSize; col++) {
                const diagonalIdx = row - col + this.pieceMapSize - 1;
                const antiDiagonalIdx = row + col;
                if (this.pieceMap[row][col] === 1) {
                    rowCount[row]++;
                    colCount[col]++;
                    diagonalCount[diagonalIdx]++;
                    antiDiagonalCount[antiDiagonalIdx]++;
                    if (rowCount[row] === 5 || 
                        colCount[col] === 5 || 
                        diagonalCount[diagonalIdx] === 5 || 
                        antiDiagonalCount[antiDiagonalIdx] === 5) {
                        return true;
                    }
                } else {
                    rowCount[row] = 0;
                    colCount[col] = 0;
                    diagonalCount[diagonalIdx] = 0;
                    antiDiagonalCount[antiDiagonalIdx] = 0;
                }
            }
        }
        return false;
    }

    return { getName, placePhantomPiece, removePhantomPiece, placeRealPiece, removeRealPiece, initPieceMap, checkWin };
};

const players = (() => {
    const blackPieceColor = 'black';
    const whitePieceColor = 'white';
    const blackPieceAudio = assets.blackPieceAudio();
    const whitePieceAudio = assets.whitePieceAudio();

    const players = [player('Black', blackPieceColor, blackPieceAudio), player('White', whitePieceColor, whitePieceAudio)]; 
    let currentPlayer = 0;

    function alternatePlayer() {
        currentPlayer = (currentPlayer + 1) % 2;
        if (controllers.hasController('player')) controllers.togglePlayerController();
    }

    function getCurrentPlayer() {
        return players[currentPlayer];
    }

    function initPieceMap(size) {
        players.forEach(target => target.initPieceMap(size));
    }

    function init(size) {
        initPieceMap(size);
        currentPlayer = 0; // always black plays first
    }

    return { alternatePlayer, getCurrentPlayer, init };
})();

const game = (() => {

    let pieces = undefined; // cache all placed pieces by two players
    let piecesId = undefined;
    let winner = undefined;
    const victoryAudios = assets.victoryAudios();

    function initPiecesCache() {
        pieces = [];
        piecesId = 0;
    }

    function nextId() {
        return ++piecesId;
    }

    function highlightPiece(piece) {
        if(pieces.length > 0) {
            pieces[pieces.length - 1].obj.classList.remove('lastPiece');
        }
        piece.classList.add('lastPiece');
    }

    function cachePieces(grid, piece) {
        highlightPiece(piece);
        pieces.push({id: nextId(), row: grid.dataset.row, col: grid.dataset.col, obj: piece});
        piece.textContent = pieces.length;
    }

    function rollBack() {
        const lastPiece = pieces.pop();
        if (lastPiece) {
            const grid = board.getGrid(lastPiece.row, lastPiece.col);
            players.alternatePlayer();
            players.getCurrentPlayer().removeRealPiece(grid);
        }
        if (hasWinner.call(this)) removeWinner.call(this);
        if (pieces.length > 0) {
            highlightPiece(pieces[pieces.length - 1].obj);
        }
    }

    /* to save resource we don't reset the game, just roll back to the round 1 */
    function restart() {
        while (pieces.length > 0) rollBack();
    }

    /* Check user plugin first. If not any, use local default announce winner controller. */
    function announceWinner(gameWinner) {
        winner = gameWinner;
        const congratulation = `${winner.getName()} win. Congratulation!`;
        if (plugins.hasPlugin('announceWinner')) {
            plugins.getPlugin('announceWinner')(congratulation);
        } else {
            defaultAnnounceWinner(congratulation);        
        }
    }

    function defaultAnnounceWinner(congratulation) {
        const element = controllers.getAnnounceWinnerController();
        const p = element.querySelector('.text');
        p.textContent = congratulation;
        document.body.appendChild(element);
        playVicotryAudio();
    }

    function playVicotryAudio() {
        victoryAudios.forEach(audio => audio.currentTime = 0);
        const r = Math.floor(Math.random() * 3);
        victoryAudios[r].play();
    }

    function hasWinner() {
        if (winner) return true;
        return false;
    }

    function removeWinner() {
        winner = undefined;
    }

    /* initialize a game */
    function init(size) {
        board.draw(size);
        players.init(size);
        initPiecesCache();
        if(winner) winner = undefined;
        if (controllers.hasController('player')) controllers.resetPlayerController();
    }

    /* Remove the old board, and insert a new board of another size, and start a new game. */
    function reset(size) {
        board.getBoard().remove();
        init(size);
    }

    return { cachePieces, rollBack, restart, announceWinner, hasWinner, removeWinner, init, reset };
})();

/* Allow user to register personal customized plugins */
const plugins = (() => {
    const plugins = {};
    
    function register(name, obj) {
        plugins[`${name}`] = obj;
    }

    function hasPlugin(name) {
        if(plugins[`${name}`]) return true;
        return false;
    }

    function getPlugin(name) {
        return plugins[`${name}`];
    }

    return { register, hasPlugin, getPlugin };
})();

const controllers = (() => {
    const bank = {}; // lazy initialization
    const clickAudio = assets.clickAudio();

    function playClickAudio() {
        clickAudio.currentTime = 0;
        clickAudio.play();
    }

    function hasController(name) {
        if (bank[`${name}`]) return true;
        return false;
    }

    function createLargeBtn(data) {
        const template = templates.largeBtn();
        const html = Mustache.render(template, data);
        const dummyContainer = document.createElement('div');
        dummyContainer.innerHTML = html;
        return dummyContainer.querySelector('.gomokuBtn');
    }

    function createPlayerController() {
        const template = templates.player();
        const dummyContainer = document.createElement('div');
        dummyContainer.innerHTML = template;
        const element = dummyContainer.querySelector('.gomokuPlayer');
        return element;
    }

    function getPlayerController() {
        if (!bank['player']) bank['player'] = createPlayerController();
        return bank['player']; 
    }

    function togglePlayerController() {
        const player = getPlayerController();
        player.querySelector('.black').classList.toggle('current');
        player.querySelector('.white').classList.toggle('current');
    }

    function resetPlayerController() {
        const player = getPlayerController();
        const black = player.querySelector('.black');
        const white = player.querySelector('.white');
        if (white.classList.contains('current')) {
            black.classList.toggle('current');
            white.classList.toggle('current');
        }
    }

    function createRollBackController() {
        const data = { icon: 'reply', text: 'Back' };
        const btn = createLargeBtn(data);
        btn.classList.add('gomokuRollBackBtn');
        btn.addEventListener('click', () => {
            playClickAudio();
            game.rollBack()
        }, false);
        return btn;
    }

    function getRollBackController() {
        if (!bank['rollBack']) bank['rollBack'] = createRollBackController();
        return bank['rollBack'];
    }

    function createRestartController() {
        const data = { icon: 'refresh', text: 'Restart' };
        const btn = createLargeBtn(data); 
        btn.classList.add('gomokuRestartBtn');
        btn.addEventListener('click', () => {
            playClickAudio();
            game.restart()
        }, false);
        return btn;
    }

    function getRestartController() {
        if (!bank['restart']) bank['restart'] = createRestartController();
        return bank['restart'];
    }

    function createToggleNumberController() {
        const data = { icon: 'panorama_fish_eye', text: 'Number Off' };
        const btn = createLargeBtn(data); 
        btn.classList.add('gomokuToggleNumberBtn');
        btn.addEventListener('click', () => { 
            playClickAudio();
            board.toggleNumber();
            const text = btn.querySelector('.text');
            const icon = btn.querySelector('.icon');
            if (text.textContent === 'Number Off') {
                icon.textContent = 'blur_circular';
                text.textContent = 'Show Number';
            } else {
                icon.textContent = 'panorama_fish_eye';
                text.textContent = 'Number Off';
            }
        });
        return btn;
    }

    function getToggleNumberController() {
        if (!bank['toggleNumber']) bank['toggleNumber'] = createToggleNumberController();
        return bank['toggleNumber'];
    }

    function createResizeController(size) {
        const btn = document.createElement('div');
        btn.classList.add('gomokuBtn');
        btn.classList.add('btn-sm');
        btn.classList.add(`gomokuResize${size}`);
        btn.textContent = `${size} × ${size}`;
        btn.addEventListener('click', () => {
            playClickAudio();
            promptResizeConfirmController(size);
        }, false);
        return btn;
    }

    function getResizeController(size) {
        if (!bank[`resize_${size}`]) bank[`resize_${size}`] = createResizeController(size);
        return bank[`resize_${size}`];
    }        

    function createResizeConfirmController() {
        const template = templates.resizeConfirm();
        const dummyContainer = document.createElement('div');
        dummyContainer.innerHTML = template;
        const element = dummyContainer.querySelector('.gomokuResizeConfirm');
        const cancel = element.querySelector('.gomokuBtn.cancel');
        cancel.addEventListener('click', () => element.remove());
        return element;
    }

    function getResizeConfirmController() {
        if (!bank[`resizeConfirm`]) bank[`resizeConfirm`] = createResizeConfirmController();
        return bank[`resizeConfirm`];
    }

    function promptResizeConfirmController(size) {
        const element = getResizeConfirmController();
        const confirm = element.querySelector('.gomokuBtn.confirm');
        confirm.addEventListener('click', () => { 
            game.reset(size)
            element.remove();
        });
        document.querySelector('body').appendChild(element);
    }

    function createAnnounceWinnerController() {
        const template = templates.announceWinner();
        const data = { trophy: assets.trophy() };
        const html = Mustache.render(template, data);
        const dummyContainer = document.createElement('div');
        dummyContainer.innerHTML = html;
        const element = dummyContainer.querySelector('.gomokuAnnounceWinner');
        const btn = element.querySelector('.gomokuBtn.confirm');
        btn.addEventListener('click', (() => element.remove()));
        return element;
    }

    function getAnnounceWinnerController() {
        if (!bank['announceWinner']) bank['announceWinner'] = createAnnounceWinnerController();
        return bank['announceWinner'];
    }

    function createControlBar() {
        const template = templates.controlBar();
        const dummyContainer = document.createElement('div');
        dummyContainer.innerHTML = template;
        const controlBar = dummyContainer.querySelector('.gomokuControlBar');
        const control = controlBar.querySelector('.control');
        const resize = controlBar.querySelector('.resize');
        control.appendChild(getPlayerController());
        control.appendChild(getRollBackController());
        control.appendChild(getRestartController());
        control.appendChild(getToggleNumberController());
        const optionalSize = [9, 11, 13, 15, 19];
        optionalSize.forEach(size => resize.appendChild(getResizeController(size)));
        return controlBar;
    }

    function getControlBar() {
        if (!bank['controlBar']) bank['controlBar'] = createControlBar();
        return bank['controlBar'];
    } 

    function createGomokuMain() {
        const gomokuDefaultSize = 15;
        const background = assets.background();
        const logo = assets.logo();
        const template = templates.gomokuMain();
        const data = { background: background, logo: logo };
        const html = Mustache.render(template, data);
        const dummyContainer = document.createElement('div');
        dummyContainer.innerHTML = html;
        const main = dummyContainer.querySelector('.gomokuMain');
        const boardSection = main.querySelector('.board');
        game.init(gomokuDefaultSize);
        board.insertBoard(boardSection);
        return main;
    }

    function getGomokuMain() {
        if (!bank['gomokuMain']) bank['gomokuMain'] = createGomokuMain();
        return bank['gomokuMain']; 
    }

    return { hasController, getPlayerController, getRollBackController, togglePlayerController, resetPlayerController, getRestartController, getToggleNumberController, getResizeController, getAnnounceWinnerController, getControlBar, getGomokuMain };
})();

/* API */
export const gomoku = (() => {

    function insertBoard(container, size) {
        game.init(size);
        board.insertBoard(container);
    }

    function insertPlayerController(container) {
        container.appendChild(controllers.getPlayerController());
    }

    function insertRollBackController(container) {
        container.appendChild(controllers.getRollBackController());
    }

    function insertRestartController(container) {
        container.appendChild(controllers.getRestartController());
    }

    function insertToggleNumberController(container) {
        container.appendChild(controllers.getToggleNumberController());
    }

    function insertResizeController(container, size) {
        container.appendChild(controllers.getResizeController(size));
    }

    /* An out-of-box control bar comming with all controllers */
    function insertControlBar(container) {
        container.appendChild(controllers.getControlBar());
    }

    /* An out-of-box gomoku game interface */
    function insertGomokuMain(container) {
        container.appendChild(controllers.getGomokuMain());
    }

    /* Optional API */
    /* User can provide their own function of showing winner.
     * The "fn" function should recieve a string as argument */
    function registerAnnounceWinner(fn) {
        plugins.register('announceWinner', fn);
    } 

    return { insertBoard, insertPlayerController, insertRollBackController, insertRestartController, insertToggleNumberController, insertResizeController, insertControlBar, insertGomokuMain, registerAnnounceWinner };
})();
