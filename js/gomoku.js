/* board module */
const board = (() => {

    let board, frontLayer, midLayer, backLayer, background = undefined;

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

    return { draw, toggleNumber, getBoard, gridIsEmpty, gridHasPhantomPiece, getGrid };

})();

/* player factory function 
 * piece is the path to the piece image */
const player = function(playerName, pieceColor) {
    const name = playerName;
    const piece = pieceColor;
    // const pieceSound = new Audio('./assets/sound/cool_interface_click.wav');
    // const pieceSound = new Audio('./assets/sound/negative_tone_interface_tap.wav');
    const pieceSound = new Audio('./assets/sound/modern_technology_select.wav');

    function getName() {
        return name;
    }

    function createPiece() {
        const newPiece = document.createElement('div');
        newPiece.classList.add('piece');
        newPiece.classList.add(piece);
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
        if (board.gridIsEmpty(grid)) {
            const newPiece = createPhantomPiece.call(this);
            grid.appendChild(newPiece);
        }
    }

    function removePhantomPiece(grid) {
        const piece = grid.querySelector('.phantom');
        if (piece) grid.removeChild(piece);
    }

    function placeRealPiece(grid) {
        if (board.gridIsEmpty(grid)) {
            const newPiece = createRealPiece.call(this);
            removePhantomPiece.call(this, grid);
            grid.appendChild(newPiece);
            addIntoPieceMap.call(this, grid);
            game.cachePieces(grid, newPiece);
            playSound();
            if (checkWin.call(this)) {
                game.announceWinner(this);
            }
            players.alternatePlayer();
        }
    }

    function playSound() {
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
    const blackPiece = 'black';
    const whitePiece = 'white';
    const players = [player('Black', blackPiece), player('White', whitePiece)]; 
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
    const rollBackController = createRollBackController();
    const restartController = createRestartController();
    const toggleNumberController = createToggleNumberController();
    const announceWinnerController = createAnnounceWinnerController();

    function createRollBackController() {
        const btn = document.createElement('div');
        btn.classList.add('gomokuBtn');
        btn.classList.add('gomokuRollBackBtn');
        btn.textContent = 'Back';
        btn.addEventListener('click', () => game.rollBack());
        return btn;
    }

    function createRestartController() {
        const btn = document.createElement('div');
        btn.classList.add('gomokuBtn');
        btn.classList.add('gomokuRestartBtn');
        btn.textContent = 'Restart';
        btn.addEventListener('click', () => game.restart());
        return btn;
    }

    function createToggleNumberController() {
        const btn = document.createElement('div');
        btn.classList.add('gomokuBtn');
        btn.classList.add('gomokuToggleNumberBtn');
        btn.textContent = 'Number Off';
        btn.addEventListener('click', () => { 
            board.toggleNumber();
            if (btn.textContent === 'Number Off') {
                btn.textContent = 'Show Number';
            } else {
                btn.textContent = 'Number Off';
            }
        });
        return btn;
    }

    function createAnnounceWinnerController() {
        const announceVictorDiv = document.createElement('div');
        announceVictorDiv.classList.add('gomokuAnnounceWinner');
        const inner = document.createElement('div');
        inner.classList.add('inner'); 
        announceVictorDiv.appendChild(inner);
        const p = document.createElement('p');
        p.classList.add('text');
        inner.appendChild(p);
        const btns = document.createElement('div');
        btns.classList.add('btns');
        const confirm = document.createElement('div');
        confirm.classList.add('gomokuBtn'); 
        confirm.classList.add('confirm'); 
        confirm.textContent = 'Wow!';
        confirm.addEventListener('click', () => toggleAnnounceWinnerController(''));
        btns.appendChild(confirm);
        inner.appendChild(btns);
        return announceVictorDiv;
    }

    function toggleAnnounceWinnerController(text) {
        const p = announceWinnerController.querySelector('.text');
        p.textContent = text;
        announceWinnerController.classList.toggle('show');
    }

    return { rollBackController, restartController, toggleNumberController, announceWinnerController, toggleAnnounceWinnerController };
})();

const game = (() => {

    let pieces = undefined;
    let id = undefined;

    function initPiecesCache() {
        pieces = [];
        id = 0;
    }

    function nextId() {
        return ++id;
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
    }

    function restart() {
        while (pieces.length > 0) rollBack();
    }

    function announceWinner(winner) {
        controllers.toggleAnnounceWinnerController(`${winner.getName()} win, congratulation!`);
    }

    return { initPiecesCache, cachePieces, rollBack, restart, announceWinner };
})();



/* API */
export const gomoku = (() => {
    let gomokuBoard = undefined;
    const rollBack = controllers.rollBackController;
    const restart = controllers.restartController;
    const toggleNumber = controllers.toggleNumberController;
    const announceWinner = controllers.announceWinnerController;

    function init(size) {
        board.draw(size);
        players.initPieceMap(size);
        game.initPiecesCache();
        this.gomokuBoard = board.getBoard();
    }

    return { init, gomokuBoard, rollBack, restart, toggleNumber, announceWinner };
})();
