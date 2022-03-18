import { gomoku } from './gomoku.js';
import '../css/index.css';
import GithubLogo from '../assets/img/github_black.png';

const initGomoku = (() => {

    const body = document.body;

    function insertFootSignature() {
        const year = new Date().getFullYear();
        const footerSignature = 
        `
        <div class="copyright">
            Copyright © hireme.shen@gmail.com 2021 - ${year}
        </div>
        <div class="source">Source code: <a href="https://github.com/helloShen/gomoku"><img class="github" src="${GithubLogo}"></a></div>
        `;
        const footer = document.querySelector('.gomokuMain > .footer');
        footer.innerHTML = footerSignature;
    }

    function init() {
        gomoku.insertControlBar(body);
        gomoku.insertGomokuMain(body);
        insertFootSignature();
    }

    return { init };

})();

initGomoku.init();
