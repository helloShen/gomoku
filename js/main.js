import { gomoku } from './gomoku.js';

const initGomoku = (() => {

    /* configuration variables */
    const defaultSize = 15;
    const optionalSize = [9, 13, 15, 19];
    /* containers */
    const board = document.querySelector('.gomoku > .board'); 
    const controlBar = document.querySelector('.gomoku > .left > .bar > .control');
    const resizeBar = document.querySelector('.gomoku > .left > .bar > .resize');

    function initGame() {
        gomoku.init(defaultSize);
    }

    function initControllers() {
        gomoku.insertRollBackController(controlBar);
        gomoku.insertRestartController(controlBar);
        gomoku.insertToggleNumberController(controlBar);
        optionalSize.forEach(size => gomoku.insertResizeController(resizeBar, size));
        gomoku.insertBoard(board);
    }

    function init() {
        initGame();
        initControllers();
    }

    return { init };

})();

initGomoku.init();
