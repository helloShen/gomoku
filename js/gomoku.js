/* board module */
const board = (() => {

    let board, frontLayer, backLayer = undefined;

    /* to draw a gomoku board as background
     * don't need this function if we use background svg image */
    function drawBackLayer(size) {
        backLayer = document.createElement('div');
        backLayer.classList.add('gomokuBoardBackLayer');
        for (let row = 0; row < size * 2; row++) {
            for (let col = 0; col < size * 2; col++) {
                const grid = document.createElement('div');
                grid.classList.add('grid');
                if (col > 0 && col < size * 2 - 1) {
                    if (row % 2 === 0) grid.classList.add('borderBottom');
                }
                if (row > 0 && row < size * 2 - 1) {
                    if (col % 2 === 0)  grid.classList.add('borderRight');
                }
                backLayer.appendChild(grid);
            }
        }
    }

    function drawFrontLayer(size) {
        frontLayer = document.createElement('div');
        frontLayer.classList.add('gomokuBoardFrontLayer');
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
        drawBackLayer(size);
        board.appendChild(backLayer);
        drawFrontLayer(size);
        board.appendChild(frontLayer);
    }

    function getBoard() {
        return board;
    }

    function gridIsEmpty(grid) {
        const content = grid.querySelector('img:not(.phantom)');
        if (content) return false;
        return true;
    }

    function gridHasPhantomPiece(grid) {
        const content = grid.querySelector('img.phantom');
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

    return { draw, getBoard, gridIsEmpty, gridHasPhantomPiece, getGrid };

})();

/* player factory function 
 * piece is the path to the piece image */
const player = function(playerName, pieceImg) {
    const name = playerName;
    const piece = pieceImg;

    function getName() {
        return name;
    }

    function createPiece() {
        const newPiece = document.createElement('img');
        newPiece.src = piece;
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
        const piece = grid.querySelector('img.phantom');
        if (piece) grid.removeChild(piece);
    }

    function placeRealPiece(grid) {
        if (board.gridIsEmpty(grid)) {
            const newPiece = createRealPiece.call(this);
            removePhantomPiece.call(this, grid);
            grid.appendChild(newPiece);
            addIntoPieceMap.call(this, grid);
            game.cachePieces(grid);
            if (checkWin.call(this)) {
                game.announceWinner(this);
            }
            players.alternatePlayer();
        }
    }

    function removeRealPiece(grid) {
        const piece = grid.querySelector('img');
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
    const blackPiece = './assets/img/black_piece.svg';
    const whitePiece = './assets/img/white_piece.svg';
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

    function createRollBackController() {
        const btn = document.createElement('button');
        btn.classList.add('rollBackBtn');
        btn.textContent = 'Back';
        btn.addEventListener('click', () => game.rollBack());
        return btn;
    }

    function createRestartController() {
        const btn = document.createElement('button');
        btn.classList.add('restartBtn');
        btn.textContent = 'Restart';
        btn.addEventListener('click', () => game.restart());
        return btn;
    }

    return { rollBackController, restartController };
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

    function cachePieces(grid) {
        pieces.push({id: nextId(), row: grid.dataset.row, col: grid.dataset.col});
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
        alert(`${winner.getName()} win!`);
    }

    return { initPiecesCache, cachePieces, rollBack, restart, announceWinner };
})();



/* API */
export default (() => {
    function initModules(size) {
        board.draw(size);
        players.initPieceMap(size);
        game.initPiecesCache();
    }

    function insertToWebPage(container) {
        container.appendChild(controllers.rollBackController);
        container.appendChild(controllers.restartController);
        container.appendChild(board.getBoard());
    }

    function init(size, container) {
        initModules(size);        
        insertToWebPage(container);        
    }

    return { init };
})();
