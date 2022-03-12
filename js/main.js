import { gomoku } from './gomoku.js';

function alertWinner(winnerText) {
    alert(winnerText);
}
const container = document.querySelector('.container'); 

gomoku.init(15);
gomoku.insertRollBackController(container);
gomoku.insertRestartController(container);
gomoku.insertToggleNumberController(container);
[9, 13, 15, 19].forEach(size => gomoku.insertResizeController(container, size));
gomoku.insertBoard(container);
// gomoku.registerAnnounceWinner(alertWinner);