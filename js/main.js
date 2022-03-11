import { gomoku } from './gomoku.js';

gomoku.init(15);
const container = document.querySelector('.container'); 
container.appendChild(gomoku.rollBack);
container.appendChild(gomoku.restart);
container.appendChild(gomoku.toggleNumber);
container.appendChild(gomoku.announceWinner);
container.appendChild(gomoku.gomokuBoard);