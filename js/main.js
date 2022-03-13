import { gomoku } from './gomoku.js';

function alertWinner(winnerText) {
    alert(winnerText);
}
const mid = document.querySelector('.gomoku>.mid'); 
const left = document.querySelector('.gomoku>.left'); 
const right = document.querySelector('.gomoku>.right'); 

gomoku.init(15);
gomoku.insertRollBackController(right);
gomoku.insertRestartController(right);
gomoku.insertToggleNumberController(right);
[9, 13, 15, 19].forEach(size => gomoku.insertResizeController(left, size));
gomoku.insertBoard(mid);