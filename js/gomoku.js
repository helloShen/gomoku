/* board module */
const board = (() => {

    let boardSize, board, frontLayer, midLayer, backLayer, background = undefined;
    const wrapper = createBoardWrapper();

    function createBoardWrapper() {
        const target = document.createElement('div');
        target.classList.add('gomokuBoardWrapper');
        return target;
    }

    function getWrapper() {
        return wrapper;
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
                    if (row > 0 && row < (size - 1) * 2) {
                        if (row % 2 === 0) grid.classList.add('borderBottom');
                    }
                }
                if (row > 0 && row < size * 2 - 1) {
                    if (col > 0 && col < (size - 1) * 2) {
                        if (col % 2 === 0)  grid.classList.add('borderRight');
                    }
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

    return { draw, toggleNumber, getBoard, gridIsEmpty, gridHasPhantomPiece, getGrid, getWrapper };

})();

/* player factory function 
 * piece is the path to the piece image */
const player = function(inName, inColor, inSound) {
    const name = inName;
    const pieceColor = inColor;  
    const pieceSound = inSound;

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
            playPieceSound();
            if (checkWin.call(this)) {
                game.announceWinner(this);
            }
            players.alternatePlayer();
        }
    }

    function playPieceSound() {
        pieceSound.currentTime = 0;
        pieceSound.play();
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
    const blackPieceSound = new Audio('./assets/gomoku/sound/blackPieceSound.wav');
    const whitePieceSound = new Audio('./assets/gomoku/sound/whitePieceSound.wav');

    const players = [player('Black', blackPieceColor, blackPieceSound), player('White', whitePieceColor, whitePieceSound)]; 
    let currentPlayer = 0;

    function alternatePlayer() {
        currentPlayer = (currentPlayer + 1) % 2;
    }

    function getCurrentPlayer() {
        return players[currentPlayer];
    }

    function initPieceMap(size) {
        players.forEach(target => target.initPieceMap(size));
    }

    return { alternatePlayer, getCurrentPlayer, initPieceMap };
})();

const controllers = (() => {
    const bank = { 'announceWinner': createAnnounceWinnerController() }; // lazy initialization
    const clickSound = new Audio('./assets/gomoku/sound/buttonClick.wav');

    function playClickSound() {
        clickSound.currentTime = 0;
        clickSound.play();
    }

    function createRollBackController() {
        const btn = document.createElement('div');
        btn.classList.add('gomokuBtn');
        btn.classList.add('btn-lg');
        btn.classList.add('gomokuRollBackBtn');
        btn.textContent = '<< Back';
        btn.addEventListener('click', () => {
            playClickSound();
            game.rollBack()
        }, false);
        return btn;
    }

    function getRollBackController() {
        if (!bank['rollBack']) bank['rollBack'] = createRollBackController();
        return bank['rollBack'];
    }

    function createRestartController() {
        const btn = document.createElement('div');
        btn.classList.add('gomokuBtn');
        btn.classList.add('btn-lg');
        btn.classList.add('gomokuRestartBtn');
        btn.textContent = 'Restart';
        btn.addEventListener('click', () => {
            playClickSound();
            game.restart()
        }, false);
        return btn;
    }

    function getRestartController() {
        if (!bank['restart']) bank['restart'] = createRestartController();
        return bank['restart'];
    }

    function createToggleNumberController() {
        const btn = document.createElement('div');
        btn.classList.add('gomokuBtn');
        btn.classList.add('btn-lg');
        btn.classList.add('gomokuToggleNumberBtn');
        btn.textContent = 'Number Off';
        btn.addEventListener('click', () => { 
            playClickSound();
            board.toggleNumber();
            if (btn.textContent === 'Number Off') {
                btn.textContent = 'Show Number';
            } else {
                btn.textContent = 'Number Off';
            }
        });
        return btn;
    }

    function getToggleNumberController() {
        if (!bank['toggleNumber']) bank['toggleNumber'] = createToggleNumberController();
        return bank['toggleNumber'];
    }

    function createAnnounceWinnerController() {
        const announceWinnerDiv = document.createElement('div');
        announceWinnerDiv.classList.add('gomokuAnnounceWinner');
        const inner = document.createElement('div');
        inner.classList.add('inner'); 
        announceWinnerDiv.appendChild(inner);
        /* trophy */
        const trophyDiv = document.createElement('div');
        trophyDiv.classList.add('trophy');
        const trophy = document.createElement('img');
        trophy.src = './assets/gomoku/img/winner.png';
        trophyDiv.appendChild(trophy);
        inner.appendChild(trophyDiv);
        /* text */
        const p = document.createElement('p');
        p.classList.add('text');
        inner.appendChild(p);
        /* btns */
        const btns = document.createElement('div');
        btns.classList.add('btns');
        const confirm = document.createElement('div');
        confirm.classList.add('gomokuBtn'); 
        confirm.classList.add('btn-lg');
        confirm.classList.add('confirm'); 
        confirm.textContent = 'Wow!';
        confirm.addEventListener('click', () => bank['announceWinner'].remove());
        btns.appendChild(confirm);
        inner.appendChild(btns);
        return announceWinnerDiv;
    }

    /* announce winner controller is always available */
    function getAnnounceWinnerController() {
        return bank['announceWinner'];
    }

    function createResizeController(size) {
        const btn = document.createElement('div');
        btn.classList.add('gomokuBtn');
        btn.classList.add('btn-sm');
        btn.classList.add(`gomokuResize${size}`);
        btn.textContent = `${size} × ${size}`;
        btn.addEventListener('click', () => {
            playClickSound();
            game.reset(size)
        }, false);
        return btn;
    }

    function getResizeController(size) {
        if (!bank[`resize_${size}`]) bank[`resize_${size}`] = createResizeController(size);
        return bank[`resize_${size}`];
    }

    return { getRollBackController, getRestartController, getToggleNumberController, getAnnounceWinnerController, getResizeController };
})();

const game = (() => {

    let pieces = undefined; // cache all placed pieces by two players
    let piecesId = undefined;
    let winner = undefined;
    const victorySounds = initVictorySounds();

    /* Create a bank of victory sounds. */
    function initVictorySounds() {
        const sounds = [];
        sounds.push(new Audio('./assets/gomoku/sound/victory1.wav'));
        sounds.push(new Audio('./assets/gomoku/sound/victory2.wav'));
        sounds.push(new Audio('./assets/gomoku/sound/victory3.wav'));
        return sounds;
    }

    function initPiecesCache() {
        pieces = [];
        piecesId = 0;
    }

    function nextId() {
        return ++piecesId;
    }

    function cachePieces(grid, piece) {
        pieces.push({id: nextId(), row: grid.dataset.row, col: grid.dataset.col});
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
        const target = controllers.getAnnounceWinnerController();
        const p = target.querySelector('.text');
        p.textContent = congratulation;
        const body = document.querySelector('body');
        body.appendChild(target);
        playVicotrySound();
    }

    function playVicotrySound() {
        victorySounds.forEach(sound => sound.currentTime = 0);
        const r = Math.floor(Math.random() * 3);
        victorySounds[r].play();
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
        players.initPieceMap(size);
        initPiecesCache();
        if(winner) winner = undefined;
    }

    /* Remove the old board, and insert a new board of another size, and start a new game. */
    function reset(size) {
        board.getBoard().remove();
        init(size);
        board.getWrapper().appendChild(board.getBoard());
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

/* API */
export const gomoku = (() => {

    function insertBoard(container) {
        const wrapper = board.getWrapper();
        wrapper.appendChild(board.getBoard());
        container.appendChild(wrapper);
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

    /* User must call this function first to initialize the game and all controllers */
    function init(size) {
        game.init(size);
    }

    /* Optional API */
    /* User can provide their own function of showing winner.
     * The "fn" function should recieve a string as argument */
    function registerAnnounceWinner(fn) {
        plugins.register('announceWinner', fn);
    } 

    return { init, insertBoard, insertRollBackController, insertRestartController, insertToggleNumberController, insertResizeController, registerAnnounceWinner };
})();
