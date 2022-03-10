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
    }

    function draw(size) {
        document.querySelector(':root').style.setProperty('--gomoku-size', size);
        board = document.createElement('div');
        board.classList.add('gomokuBoard');
        drawBackLayer(size);
        board.appendChild(backLayer);
        drawFrontLayer(size);
        board.appendChild(frontLayer);
        return board;
    }

    function getBoard() {
        return frontLayer;
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
const player = function(pieceImg) {
    const piece = pieceImg;

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
            gomoku.cachePieces(grid);
            players.alternatePlayer();
        }
    }

    function removeRealPiece(grid) {
        const piece = grid.querySelector('img');
        if (piece) grid.removeChild(piece);
        players.alternatePlayer();
    }

    return { placePhantomPiece, removePhantomPiece, placeRealPiece, removeRealPiece };
};

const players = (() => {
    const blackPiece = './assets/img/black_piece.svg';
    const whitePiece = './assets/img/white_piece.svg';
    const players = [player(blackPiece), player(whitePiece)]; 
    let currentPlayer = 0;

    function alternatePlayer() {
        currentPlayer = (currentPlayer + 1) % 2;
    }

    function getCurrentPlayer() {
        return players[currentPlayer];
    }

    return { alternatePlayer, getCurrentPlayer };
})();

const controllers = (() => {
    const rollBackController = createRollBackController();

    function createRollBackController() {
        const btn = document.createElement('button');
        btn.classList.add('rollBackBtn');
        btn.textContent = 'Back';
        btn.addEventListener('click', () => gomoku.rollBack());
        return btn;
    }

    return { rollBackController };
})();

export const gomoku = (() => {
    
    const pieces = [];
    let id = 0;

    function nextId() {
        return ++id;
    }

    function initPhantomPiece() {
        board.getBoard().querySelectorAll('.grid').forEach(grid => {
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
        board.getBoard().querySelectorAll('.grid').forEach(grid => {
            grid.addEventListener('click', (e) => {
                e.stopPropagation();
                players.getCurrentPlayer().placeRealPiece(grid);
            }, false);
        });
    }

    function cachePieces(grid) {
        pieces.push({id: nextId(), row: grid.dataset.row, col: grid.dataset.col});
    }

    function rollBack() {
        const lastPiece = pieces.pop();
        if (lastPiece) {
            const grid = board.getGrid(lastPiece.row, lastPiece.col);
            players.getCurrentPlayer().removeRealPiece(grid);
        }
    }

    function start() {
        initPhantomPiece();
        initRealPiece();
    }

    function initIn(size, container) {
        container.appendChild(controllers.rollBackController);
        container.appendChild(board.draw(size));
        start();
    }
        
    return { initIn, cachePieces, rollBack };
})();

