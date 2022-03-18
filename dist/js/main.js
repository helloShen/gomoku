/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/gomoku.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/gomoku.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* normalization */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/* gomoku */\n:root {\n    /* board front layer */\n    --gomoku-size: 15;\n    --gomoku-grid-radius: 1rem;\n    --gomoku-grid-length: calc(var(--gomoku-grid-radius) * 2);\n    --gomoku-length: calc(var(--gomoku-size) * var(--gomoku-grid-length));\n    /* board back layer */\n    --gomoku-back-size: calc(var(--gomoku-size) * 2);\n    --gomoku-back-grid-radius: calc(var(--gomoku-grid-radius) / 2);\n    --gomoku-back-grid-length: calc(var(--gomoku-back-grid-radius) * 2);\n    /* colors */\n    --gomoku-board-classic-yellow: #DCB35C;\n    --gomoku-board-golden-700: #a67c00;\n    --gomoku-board-golden-500: #ffbf00;\n    --gomoku-board-golden-300: #ffcf40;\n    --gomoku-board-golden-100: #ffdc73;\n    --gomoku-white: #FAF8FF;\n    --gomoku-gray-100: #E5E5E5;\n    --gomoku-gray-300: #B2B2B2;\n    --gomoku-gray-500: #838383;\n    --gomoku-gray-700: #565656;\n    --gomoku-muted: #00000044;\n    --gomoku-black: #2C2C2C;\n    --white: #FFFFFF;\n    --black: #000000;\n    --black-translucent: #000000AA;\n    --white-translucent: #FFFFFFAA;\n}\n\n.gomokuBoard {\n    position: relative;\n    --size: var(--gomoku-length);\n    width:  var(--size);\n    height: var(--size);\n    display: grid;\n    grid-template-columns: var(--size);\n    grid-template-rows: var(--size);\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuBoardBackground {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    width: calc(calc(var(--gomoku-back-grid-length) * calc(var(--gomoku-size) * 2)));\n    /* width: calc(calc(var(--gomoku-back-grid-length) * calc(calc(var(--gomoku-size) - 1) * 2))); */\n    height: calc(calc(var(--gomoku-back-grid-length) * calc(var(--gomoku-size) * 2))); \n    /* height: calc(calc(var(--gomoku-back-grid-length) * calc(calc(var(--gomoku-size) - 1) * 2)));  */\n    background-color: var(--gomoku-white);\n    z-index: 1;\n}\n\n.gomokuBoardBackLayer {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    width:  var(--gomoku-length);\n    height: var(--gomoku-length);\n    z-index: 2;\n    display: grid;\n    grid-template-columns: repeat(var(--gomoku-back-size), var(--gomoku-back-grid-length));\n    grid-template-rows: repeat(var(--gomoku-back-size), var(--gomoku-back-grid-length));\n}\n\n.gomokuBoardBackLayer > .grid.borderBottom {\n    border-bottom: 1px solid var(--gomoku-gray-300);\n}\n\n.gomokuBoardBackLayer > .grid.borderRight {\n    border-right: 1px solid var(--gomoku-gray-300);\n}\n\n.gomokuBoardMidLayer {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    box-sizing: content-box;\n    width: calc(calc(var(--gomoku-back-grid-length) * calc(var(--gomoku-size) * 2)));\n    /* width: calc(calc(var(--gomoku-back-grid-length) * calc(calc(var(--gomoku-size) - 1) * 2))); */\n    height: calc(calc(var(--gomoku-back-grid-length) * calc(var(--gomoku-size) * 2)));\n    /* height: calc(calc(var(--gomoku-back-grid-length) * calc(calc(var(--gomoku-size) - 1) * 2))); */\n    border: .25rem solid var(--gomoku-black);\n    border-radius: .5rem;\n    z-index: 3;\n    position: relative;\n}\n\n.gomokuBoardMidLayer > .dot {\n    --dot-size: .5rem;\n    width: var(--dot-size);\n    height: var(--dot-size);\n    background-color: var(--gomoku-gray-300);\n    border-radius: calc(calc(var(--dot-size) / 2) - 1px);\n    z-index: 3;\n}\n\n.gomokuBoardMidLayer > .dot.dot1 {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(calc(var(--dot-size) / -2)) translateY(calc(var(--dot-size) / -2));\n}\n\n.gomokuBoardMidLayer > .dot.dot2 {\n    position: absolute;\n    top: calc(3.5 * var(--gomoku-grid-length));\n    left: calc(3.5 * var(--gomoku-grid-length));\n    /* top: calc(3 * var(--gomoku-grid-length)); */\n    /* left: calc(3 * var(--gomoku-grid-length)); */\n    transform: translateX(calc(var(--dot-size) / -2)) translateY(calc(var(--dot-size) / -2));\n}\n\n.gomokuBoardMidLayer > .dot.dot3 {\n    position: absolute;\n    top: calc(3.5 * var(--gomoku-grid-length));\n    right: calc(3.5 * var(--gomoku-grid-length));\n    /* top: calc(3 * var(--gomoku-grid-length)); */\n    /* right: calc(3 * var(--gomoku-grid-length)); */\n    transform: translateX(calc(var(--dot-size) / 2)) translateY(calc(var(--dot-size) / -2));\n}\n.gomokuBoardMidLayer > .dot.dot4 {\n    position: absolute;\n    bottom: calc(3.5 * var(--gomoku-grid-length));\n    left: calc(3.5 * var(--gomoku-grid-length));\n    /* bottom: calc(3 * var(--gomoku-grid-length)); */\n    /* left: calc(3 * var(--gomoku-grid-length)); */\n    transform: translateX(calc(var(--dot-size) / -2)) translateY(calc(var(--dot-size) / 2));\n}\n.gomokuBoardMidLayer > .dot.dot5 {\n    position: absolute;\n    bottom: calc(3.5 * var(--gomoku-grid-length));\n    right: calc(3.5 * var(--gomoku-grid-length));\n    /* bottom: calc(3 * var(--gomoku-grid-length)); */\n    /* right: calc(3 * var(--gomoku-grid-length)); */\n    transform: translateX(calc(var(--dot-size) / 2)) translateY(calc(var(--dot-size) / 2));\n}\n\n.gomokuBoardFrontLayer {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    box-sizing: content-box;\n    width:  var(--gomoku-length);\n    height: var(--gomoku-length);\n    z-index: 4;\n    display: grid;\n    grid-template-columns: repeat(var(--gomoku-size), var(--gomoku-grid-length));\n    grid-template-rows: repeat(var(--gomoku-size), var(--gomoku-grid-length));\n}\n\n.gomokuBoardFrontLayer > .grid {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuBoardFrontLayer > .grid > .piece {\n    width: calc(var(--gomoku-grid-length) * 0.9);\n    height: calc(var(--gomoku-grid-length) * 0.9);\n    border-radius: calc(var(--gomoku-grid-length) / 2);\n    font-size: .5rem;\n    font-weight: 900;\n    user-select: none;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.black.lastPiece {\n    border: 2px solid var(--gomoku-board-golden-500) !important;\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.white.lastPiece {\n    border: 2px solid var(--gomoku-board-golden-700) !important;\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.black {\n    color: transparent;\n    background-color: var(--gomoku-black);\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.white {\n    color: transparent;\n    background-color: var(--gomoku-white);\n    border: 2px solid var(--gomoku-black);\n}\n\n.gomokuBoardFrontLayer.showNumber > .grid > .piece.black {\n    color: var(--gomoku-white);\n}\n\n.gomokuBoardFrontLayer.showNumber > .grid > .piece.white {\n    color: var(--gomoku-black);\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.phantom {\n    opacity: .5;\n}\n\n.gomokuPromptForm {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--gomoku-muted);\n    z-index: 5;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuPromptForm > .inner {\n    font-size: 1rem;\n    padding: 1rem 2rem;\n    background-color: var(--gomoku-white);\n    border-radius: .5rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuPromptForm .btns {\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuResizeConfirm > .inner {\n    grid-template-columns: 16rem;\n    grid-template-rows: 4.5rem 4.5rem;\n}\n\n.gomokuAnnounceWinner > .inner {\n    grid-template-columns: 16rem;\n    grid-template-rows: 6rem 2.5rem 4rem;\n    animation: gomokuWinnerAnimation .5s ease-in forwards;\n}\n\n@keyframes gomokuWinnerAnimation {\n    from {\n        transform: scale(0);\n    }\n    to {\n        transform: scale(1.25);\n    }\n}\n\n.gomokuAnnounceWinner .trophy {\n    height: 6rem;\n    width: 6rem;\n}\n\n.gomokuAnnounceWinner .trophy > img {\n    width: 100%;\n    height: 100%;\n}\n\n.gomokuBtn {\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    font-weight: bold;\n    color: var(--gomoku-white);\n    background-color: var(--gomoku-black);\n    border-radius: .5rem;\n    cursor: pointer;\n    user-select: none;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.gomokuBtn:hover {\n    background-color: var(--gomoku-gray-700);\n}\n\n.gomokuPlayer {\n    --piece-size: 3rem;\n    height: var(--piece-size);\n    width: 10rem;\n    margin: 2rem 1rem;\n    user-select: none;\n    display: grid;\n    grid-template-columns: var(--piece-size) var(--piece-size);\n    justify-content: space-around;\n}\n\n.gomokuPlayer .black,\n.gomokuPlayer .white {\n    height: var(--piece-size);\n    width: var(--piece-size);\n    border-radius: calc(var(--piece-size) / 2);\n    font-size: .75rem;\n    font-weight: bold;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuPlayer .black.current,\n.gomokuPlayer .white.current {\n    border: 4px solid var(--gomoku-board-golden-500);\n}\n\n.gomokuPlayer .black {\n    color: var(--white);\n    border: 4px solid var(--white);\n    background-color: var(--gomoku-black);\n}\n\n.gomokuPlayer .white {\n    color: var(--black);\n    background-color: var(--white);\n}\n\n.gomokuBtn {\n    user-select: none;\n}\n\n.gomokuBtn:active,\n.gomokuBtn.current {\n    background-color: var(--gomoku-white);\n    color: var(--gomoku-black);\n}\n\n.gomokuBtn.btn-lg {\n    height: 2.5rem;\n    width: 10rem;\n    padding: .5rem 1rem;\n    margin: 1rem;\n    display: grid;\n    grid-auto-flow: column;\n    gap: .5rem;\n}\n\n.gomokuBtn.btn-sm {\n    height: 2rem;\n    width: 6rem;\n    padding: .25rem .5rem;\n    margin: .5rem;\n}\n\n.gomokuControlBar {\n    width: 12rem;\n    min-height: 100vh;\n    padding: 1rem 0;\n    background-color: var(--gomoku-black);\n    box-shadow: 1px 0px 4px var(--black-translucent);\n    opacity: .9;\n    user-select: none;\n    display: grid;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.gomokuControlBar > .title {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.5rem;\n    font-weight: 100;\n    color: var(--white);\n    margin-top: 1rem;\n}\n\n.gomokuMain {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    min-width: 36rem;\n    display: grid;\n    grid-template-rows: 8rem 1fr 3rem;\n}\n\n.gomokuMain > img {\n    grid-row: 1 / span 3;\n    grid-column: 1 / span 1;\n    align-self: center;\n    justify-self: center;\n}\n\n.gomokuMain > img.background1 {\n    width: 360px;\n    height: auto;\n    transform: scaleX(-1) translateX(-240px) translateY(60px);\n    z-index: -2;\n}\n\n.gomokuMain > img.background2 {\n    width: 300px;\n    height: auto;\n    transform: rotate(120deg) translateX(160px) translateY(160px);\n    z-index: -1;\n}\n\n.gomokuMain > .header {\n    grid-column: 1 / span 1;\n    grid-row: 1 / span 1;\n    height: 8rem;\n    padding: 1rem;\n    margin-bottom: 1rem;\n    display: grid;\n    gap: .5rem;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.gomokuMain .logo-img {\n    height: 3.5rem;\n    width: 3.5rem;\n}\n\n.gomokuMain .logo-img > img {\n    width: 100%;\n    height: 100%;\n}\n\n.gomokuMain .logo {\n    font-family: 'Righteous', cursive;\n    height: 2rem;\n    font-size: 1.5rem;\n    color: var(--gomoku-board-golden-700);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuMain > .board {\n    grid-column: 1 / span 1;\n    grid-row: 2 / span 1;\n    padding: 1rem 2rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuMain > .footer {\n    grid-column: 1 / span 1;\n    grid-row: 3 / span 1;\n    height: 3rem;\n    min-width: 30rem;\n    font-size: .75rem;\n    color: var(--gray-700);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/gomoku.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap'); \n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n\n/* normalization */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/* gomoku */\n:root {\n    /* board front layer */\n    --gomoku-size: 15;\n    --gomoku-grid-radius: 1rem;\n    --gomoku-grid-length: calc(var(--gomoku-grid-radius) * 2);\n    --gomoku-length: calc(var(--gomoku-size) * var(--gomoku-grid-length));\n    /* board back layer */\n    --gomoku-back-size: calc(var(--gomoku-size) * 2);\n    --gomoku-back-grid-radius: calc(var(--gomoku-grid-radius) / 2);\n    --gomoku-back-grid-length: calc(var(--gomoku-back-grid-radius) * 2);\n    /* colors */\n    --gomoku-board-classic-yellow: #DCB35C;\n    --gomoku-board-golden-700: #a67c00;\n    --gomoku-board-golden-500: #ffbf00;\n    --gomoku-board-golden-300: #ffcf40;\n    --gomoku-board-golden-100: #ffdc73;\n    --gomoku-white: #FAF8FF;\n    --gomoku-gray-100: #E5E5E5;\n    --gomoku-gray-300: #B2B2B2;\n    --gomoku-gray-500: #838383;\n    --gomoku-gray-700: #565656;\n    --gomoku-muted: #00000044;\n    --gomoku-black: #2C2C2C;\n    --white: #FFFFFF;\n    --black: #000000;\n    --black-translucent: #000000AA;\n    --white-translucent: #FFFFFFAA;\n}\n\n.gomokuBoard {\n    position: relative;\n    --size: var(--gomoku-length);\n    width:  var(--size);\n    height: var(--size);\n    display: grid;\n    grid-template-columns: var(--size);\n    grid-template-rows: var(--size);\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuBoardBackground {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    width: calc(calc(var(--gomoku-back-grid-length) * calc(var(--gomoku-size) * 2)));\n    /* width: calc(calc(var(--gomoku-back-grid-length) * calc(calc(var(--gomoku-size) - 1) * 2))); */\n    height: calc(calc(var(--gomoku-back-grid-length) * calc(var(--gomoku-size) * 2))); \n    /* height: calc(calc(var(--gomoku-back-grid-length) * calc(calc(var(--gomoku-size) - 1) * 2)));  */\n    background-color: var(--gomoku-white);\n    z-index: 1;\n}\n\n.gomokuBoardBackLayer {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    width:  var(--gomoku-length);\n    height: var(--gomoku-length);\n    z-index: 2;\n    display: grid;\n    grid-template-columns: repeat(var(--gomoku-back-size), var(--gomoku-back-grid-length));\n    grid-template-rows: repeat(var(--gomoku-back-size), var(--gomoku-back-grid-length));\n}\n\n.gomokuBoardBackLayer > .grid.borderBottom {\n    border-bottom: 1px solid var(--gomoku-gray-300);\n}\n\n.gomokuBoardBackLayer > .grid.borderRight {\n    border-right: 1px solid var(--gomoku-gray-300);\n}\n\n.gomokuBoardMidLayer {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    box-sizing: content-box;\n    width: calc(calc(var(--gomoku-back-grid-length) * calc(var(--gomoku-size) * 2)));\n    /* width: calc(calc(var(--gomoku-back-grid-length) * calc(calc(var(--gomoku-size) - 1) * 2))); */\n    height: calc(calc(var(--gomoku-back-grid-length) * calc(var(--gomoku-size) * 2)));\n    /* height: calc(calc(var(--gomoku-back-grid-length) * calc(calc(var(--gomoku-size) - 1) * 2))); */\n    border: .25rem solid var(--gomoku-black);\n    border-radius: .5rem;\n    z-index: 3;\n    position: relative;\n}\n\n.gomokuBoardMidLayer > .dot {\n    --dot-size: .5rem;\n    width: var(--dot-size);\n    height: var(--dot-size);\n    background-color: var(--gomoku-gray-300);\n    border-radius: calc(calc(var(--dot-size) / 2) - 1px);\n    z-index: 3;\n}\n\n.gomokuBoardMidLayer > .dot.dot1 {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(calc(var(--dot-size) / -2)) translateY(calc(var(--dot-size) / -2));\n}\n\n.gomokuBoardMidLayer > .dot.dot2 {\n    position: absolute;\n    top: calc(3.5 * var(--gomoku-grid-length));\n    left: calc(3.5 * var(--gomoku-grid-length));\n    /* top: calc(3 * var(--gomoku-grid-length)); */\n    /* left: calc(3 * var(--gomoku-grid-length)); */\n    transform: translateX(calc(var(--dot-size) / -2)) translateY(calc(var(--dot-size) / -2));\n}\n\n.gomokuBoardMidLayer > .dot.dot3 {\n    position: absolute;\n    top: calc(3.5 * var(--gomoku-grid-length));\n    right: calc(3.5 * var(--gomoku-grid-length));\n    /* top: calc(3 * var(--gomoku-grid-length)); */\n    /* right: calc(3 * var(--gomoku-grid-length)); */\n    transform: translateX(calc(var(--dot-size) / 2)) translateY(calc(var(--dot-size) / -2));\n}\n.gomokuBoardMidLayer > .dot.dot4 {\n    position: absolute;\n    bottom: calc(3.5 * var(--gomoku-grid-length));\n    left: calc(3.5 * var(--gomoku-grid-length));\n    /* bottom: calc(3 * var(--gomoku-grid-length)); */\n    /* left: calc(3 * var(--gomoku-grid-length)); */\n    transform: translateX(calc(var(--dot-size) / -2)) translateY(calc(var(--dot-size) / 2));\n}\n.gomokuBoardMidLayer > .dot.dot5 {\n    position: absolute;\n    bottom: calc(3.5 * var(--gomoku-grid-length));\n    right: calc(3.5 * var(--gomoku-grid-length));\n    /* bottom: calc(3 * var(--gomoku-grid-length)); */\n    /* right: calc(3 * var(--gomoku-grid-length)); */\n    transform: translateX(calc(var(--dot-size) / 2)) translateY(calc(var(--dot-size) / 2));\n}\n\n.gomokuBoardFrontLayer {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    box-sizing: content-box;\n    width:  var(--gomoku-length);\n    height: var(--gomoku-length);\n    z-index: 4;\n    display: grid;\n    grid-template-columns: repeat(var(--gomoku-size), var(--gomoku-grid-length));\n    grid-template-rows: repeat(var(--gomoku-size), var(--gomoku-grid-length));\n}\n\n.gomokuBoardFrontLayer > .grid {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuBoardFrontLayer > .grid > .piece {\n    width: calc(var(--gomoku-grid-length) * 0.9);\n    height: calc(var(--gomoku-grid-length) * 0.9);\n    border-radius: calc(var(--gomoku-grid-length) / 2);\n    font-size: .5rem;\n    font-weight: 900;\n    user-select: none;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.black.lastPiece {\n    border: 2px solid var(--gomoku-board-golden-500) !important;\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.white.lastPiece {\n    border: 2px solid var(--gomoku-board-golden-700) !important;\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.black {\n    color: transparent;\n    background-color: var(--gomoku-black);\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.white {\n    color: transparent;\n    background-color: var(--gomoku-white);\n    border: 2px solid var(--gomoku-black);\n}\n\n.gomokuBoardFrontLayer.showNumber > .grid > .piece.black {\n    color: var(--gomoku-white);\n}\n\n.gomokuBoardFrontLayer.showNumber > .grid > .piece.white {\n    color: var(--gomoku-black);\n}\n\n.gomokuBoardFrontLayer > .grid > .piece.phantom {\n    opacity: .5;\n}\n\n.gomokuPromptForm {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--gomoku-muted);\n    z-index: 5;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuPromptForm > .inner {\n    font-size: 1rem;\n    padding: 1rem 2rem;\n    background-color: var(--gomoku-white);\n    border-radius: .5rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuPromptForm .btns {\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuResizeConfirm > .inner {\n    grid-template-columns: 16rem;\n    grid-template-rows: 4.5rem 4.5rem;\n}\n\n.gomokuAnnounceWinner > .inner {\n    grid-template-columns: 16rem;\n    grid-template-rows: 6rem 2.5rem 4rem;\n    animation: gomokuWinnerAnimation .5s ease-in forwards;\n}\n\n@keyframes gomokuWinnerAnimation {\n    from {\n        transform: scale(0);\n    }\n    to {\n        transform: scale(1.25);\n    }\n}\n\n.gomokuAnnounceWinner .trophy {\n    height: 6rem;\n    width: 6rem;\n}\n\n.gomokuAnnounceWinner .trophy > img {\n    width: 100%;\n    height: 100%;\n}\n\n.gomokuBtn {\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    font-weight: bold;\n    color: var(--gomoku-white);\n    background-color: var(--gomoku-black);\n    border-radius: .5rem;\n    cursor: pointer;\n    user-select: none;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.gomokuBtn:hover {\n    background-color: var(--gomoku-gray-700);\n}\n\n.gomokuPlayer {\n    --piece-size: 3rem;\n    height: var(--piece-size);\n    width: 10rem;\n    margin: 2rem 1rem;\n    user-select: none;\n    display: grid;\n    grid-template-columns: var(--piece-size) var(--piece-size);\n    justify-content: space-around;\n}\n\n.gomokuPlayer .black,\n.gomokuPlayer .white {\n    height: var(--piece-size);\n    width: var(--piece-size);\n    border-radius: calc(var(--piece-size) / 2);\n    font-size: .75rem;\n    font-weight: bold;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuPlayer .black.current,\n.gomokuPlayer .white.current {\n    border: 4px solid var(--gomoku-board-golden-500);\n}\n\n.gomokuPlayer .black {\n    color: var(--white);\n    border: 4px solid var(--white);\n    background-color: var(--gomoku-black);\n}\n\n.gomokuPlayer .white {\n    color: var(--black);\n    background-color: var(--white);\n}\n\n.gomokuBtn {\n    user-select: none;\n}\n\n.gomokuBtn:active,\n.gomokuBtn.current {\n    background-color: var(--gomoku-white);\n    color: var(--gomoku-black);\n}\n\n.gomokuBtn.btn-lg {\n    height: 2.5rem;\n    width: 10rem;\n    padding: .5rem 1rem;\n    margin: 1rem;\n    display: grid;\n    grid-auto-flow: column;\n    gap: .5rem;\n}\n\n.gomokuBtn.btn-sm {\n    height: 2rem;\n    width: 6rem;\n    padding: .25rem .5rem;\n    margin: .5rem;\n}\n\n.gomokuControlBar {\n    width: 12rem;\n    min-height: 100vh;\n    padding: 1rem 0;\n    background-color: var(--gomoku-black);\n    box-shadow: 1px 0px 4px var(--black-translucent);\n    opacity: .9;\n    user-select: none;\n    display: grid;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.gomokuControlBar > .title {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.5rem;\n    font-weight: 100;\n    color: var(--white);\n    margin-top: 1rem;\n}\n\n.gomokuMain {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    min-width: 36rem;\n    display: grid;\n    grid-template-rows: 8rem 1fr 3rem;\n}\n\n.gomokuMain > img {\n    grid-row: 1 / span 3;\n    grid-column: 1 / span 1;\n    align-self: center;\n    justify-self: center;\n}\n\n.gomokuMain > img.background1 {\n    width: 360px;\n    height: auto;\n    transform: scaleX(-1) translateX(-240px) translateY(60px);\n    z-index: -2;\n}\n\n.gomokuMain > img.background2 {\n    width: 300px;\n    height: auto;\n    transform: rotate(120deg) translateX(160px) translateY(160px);\n    z-index: -1;\n}\n\n.gomokuMain > .header {\n    grid-column: 1 / span 1;\n    grid-row: 1 / span 1;\n    height: 8rem;\n    padding: 1rem;\n    margin-bottom: 1rem;\n    display: grid;\n    gap: .5rem;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.gomokuMain .logo-img {\n    height: 3.5rem;\n    width: 3.5rem;\n}\n\n.gomokuMain .logo-img > img {\n    width: 100%;\n    height: 100%;\n}\n\n.gomokuMain .logo {\n    font-family: 'Righteous', cursive;\n    height: 2rem;\n    font-size: 1.5rem;\n    color: var(--gomoku-board-golden-700);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuMain > .board {\n    grid-column: 1 / span 1;\n    grid-row: 2 / span 1;\n    padding: 1rem 2rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.gomokuMain > .footer {\n    grid-column: 1 / span 1;\n    grid-row: 3 / span 1;\n    height: 3rem;\n    min-width: 30rem;\n    font-size: .75rem;\n    color: var(--gray-700);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_norm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./norm.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/norm.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gomoku_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./gomoku.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/gomoku.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_norm_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_gomoku_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --white: #FFFFFF;\n    --gray-100: #E5E5E5;\n    --gray-300: #B2B2B2;\n    --gray-500: #838383;\n    --gray-700: #565656;\n    --black: #000000;\n    --black-translucent: #000000AA;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 12rem 1fr;\n    grid-template-rows: 1fr;\n}\n\n.footer > .copyright,\n.footer > .source {\n    height: 1.5rem;\n    margin: .75rem .5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.footer > .source {\n    gap: .5rem;\n}\n\n.source > a {\n    height: 1.5rem;\n}\n\n.source > a > img {\n    height: 100%;\n    width: auto;\n}\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,8BAA8B;AAClC;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,aAAa;IACb,gCAAgC;IAChC,uBAAuB;AAC3B;;AAEA;;IAEI,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["@import url(./norm.css);\n@import url(./gomoku.css);\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');\n\n:root {\n    --white: #FFFFFF;\n    --gray-100: #E5E5E5;\n    --gray-300: #B2B2B2;\n    --gray-500: #838383;\n    --gray-700: #565656;\n    --black: #000000;\n    --black-translucent: #000000AA;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 12rem 1fr;\n    grid-template-rows: 1fr;\n}\n\n.footer > .copyright,\n.footer > .source {\n    height: 1.5rem;\n    margin: .75rem .5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.footer > .source {\n    gap: .5rem;\n}\n\n.source > a {\n    height: 1.5rem;\n}\n\n.source > a > img {\n    height: 100%;\n    width: auto;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/norm.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/norm.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nul,\nol {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: currentColor;\n}", "",{"version":3,"sources":["webpack://./src/css/norm.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,0JAA0J;AAC9J;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;AACvB","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nul,\nol {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: currentColor;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/mustache/mustache.js":
/*!*******************************************!*\
  !*** ./node_modules/mustache/mustache.js ***!
  \*******************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  /**
   * Safe way of detecting whether or not the given thing is a primitive and
   * whether it has the given property
   */
  function primitiveHasOwnProperty (primitive, propName) {
    return (
      primitive != null
      && typeof primitive !== 'object'
      && primitive.hasOwnProperty
      && primitive.hasOwnProperty(propName)
    );
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   *
   * Tokens for partials also contain two more elements: 1) a string value of
   * indendation prior to that tag and 2) the index of that tag on that line -
   * eg a value of 2 indicates the partial is the third tag on this line.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];
    var lineHasNonSpace = false;
    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?
    var indentation = '';  // Tracks indentation for tags that use it
    var tagIndex = 0;      // Stores a count of number of tags encountered on a line

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
            indentation += chr;
          } else {
            nonSpace = true;
            lineHasNonSpace = true;
            indentation += ' ';
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
            indentation = '';
            tagIndex = 0;
            lineHasNonSpace = false;
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      if (type == '>') {
        token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
      } else {
        token = [ type, value, start, scanner.pos ];
      }
      tagIndex++;
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    stripSpace();

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          intermediateValue = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           *
           * In the case where dot notation is used, we consider the lookup
           * to be successful even if the last "object" in the path is
           * not actually an object but a primitive (e.g., a string, or an
           * integer), because it is sometimes useful to access a property
           * of an autoboxed primitive, such as the length of a string.
           **/
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = (
                hasProperty(intermediateValue, names[index])
                || primitiveHasOwnProperty(intermediateValue, names[index])
              );

            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];

          /**
           * Only checking against `hasProperty`, which always returns `false` if
           * `context.view` is not an object. Deliberately omitting the check
           * against `primitiveHasOwnProperty` if dot notation is not used.
           *
           * Consider this example:
           * ```
           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
           * ```
           *
           * If we were to check also against `primitiveHasOwnProperty`, as we do
           * in the dot notation case, then render call would return:
           *
           * "The length of a football field is 9."
           *
           * rather than the expected:
           *
           * "The length of a football field is 100 yards."
           **/
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit) {
          value = intermediateValue;
          break;
        }

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.templateCache = {
      _cache: {},
      set: function set (key, value) {
        this._cache[key] = value;
      },
      get: function get (key) {
        return this._cache[key];
      },
      clear: function clear () {
        this._cache = {};
      }
    };
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    if (typeof this.templateCache !== 'undefined') {
      this.templateCache.clear();
    }
  };

  /**
   * Parses and caches the given `template` according to the given `tags` or
   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.templateCache;
    var cacheKey = template + ':' + (tags || mustache.tags).join(':');
    var isCacheEnabled = typeof cache !== 'undefined';
    var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

    if (tokens == undefined) {
      tokens = parseTemplate(template, tags);
      isCacheEnabled && cache.set(cacheKey, tokens);
    }
    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   *
   * If the optional `config` argument is given here, then it should be an
   * object with a `tags` attribute or an `escape` attribute or both.
   * If an array is passed, then it will be interpreted the same way as
   * a `tags` attribute on a `config` object.
   *
   * The `tags` attribute of a `config` object must be an array with two
   * string values: the opening and closing tags used in the template (e.g.
   * [ "<%", "%>" ]). The default is to mustache.tags.
   *
   * The `escape` attribute of a `config` object must be a function which
   * accepts a string as input and outputs a safely escaped string.
   * If an `escape` function is not provided, then an HTML-safe string
   * escaping function is used as the default.
   */
  Writer.prototype.render = function render (template, view, partials, config) {
    var tags = this.getConfigTags(config);
    var tokens = this.parse(template, tags);
    var context = (view instanceof Context) ? view : new Context(view, undefined);
    return this.renderTokens(tokens, context, partials, template, config);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context, config);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials, config);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate, config);
  };

  Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
    var filteredIndentation = indentation.replace(/[^ \t]/g, '');
    var partialByNl = partial.split('\n');
    for (var i = 0; i < partialByNl.length; i++) {
      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
        partialByNl[i] = filteredIndentation + partialByNl[i];
      }
    }
    return partialByNl.join('\n');
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
    if (!partials) return;
    var tags = this.getConfigTags(config);

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) {
      var lineHasNonSpace = token[6];
      var tagIndex = token[5];
      var indentation = token[4];
      var indentedValue = value;
      if (tagIndex == 0 && indentation) {
        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
      }
      var tokens = this.parse(indentedValue, tags);
      return this.renderTokens(tokens, context, partials, indentedValue, config);
    }
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context, config) {
    var escape = this.getConfigEscape(config) || mustache.escape;
    var value = context.lookup(token[1]);
    if (value != null)
      return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  Writer.prototype.getConfigTags = function getConfigTags (config) {
    if (isArray(config)) {
      return config;
    }
    else if (config && typeof config === 'object') {
      return config.tags;
    }
    else {
      return undefined;
    }
  };

  Writer.prototype.getConfigEscape = function getConfigEscape (config) {
    if (config && typeof config === 'object' && !isArray(config)) {
      return config.escape;
    }
    else {
      return undefined;
    }
  };

  var mustache = {
    name: 'mustache.js',
    version: '4.2.0',
    tags: [ '{{', '}}' ],
    clearCache: undefined,
    escape: undefined,
    parse: undefined,
    render: undefined,
    Scanner: undefined,
    Context: undefined,
    Writer: undefined,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache (cache) {
      defaultWriter.templateCache = cache;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache () {
      return defaultWriter.templateCache;
    }
  };

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view`, `partials`, and `config`
   * using the default writer.
   */
  mustache.render = function render (template, view, partials, config) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials, config);
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;

})));


/***/ }),

/***/ "./src/css/gomoku.css":
/*!****************************!*\
  !*** ./src/css/gomoku.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gomoku_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gomoku.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/gomoku.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gomoku_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gomoku_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gomoku_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gomoku_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/gomoku.js":
/*!**************************!*\
  !*** ./src/js/gomoku.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gomoku": () => (/* binding */ gomoku)
/* harmony export */ });
/* harmony import */ var _gomokuTemplates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gomokuTemplates.js */ "./src/js/gomokuTemplates.js");
/* harmony import */ var _gomokuAssets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gomokuAssets.js */ "./src/js/gomokuAssets.js");
/* harmony import */ var _css_gomoku_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/gomoku.css */ "./src/css/gomoku.css");
const Mustache = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");




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
    const blackPieceAudio = _gomokuAssets_js__WEBPACK_IMPORTED_MODULE_1__["default"].blackPieceAudio();
    const whitePieceAudio = _gomokuAssets_js__WEBPACK_IMPORTED_MODULE_1__["default"].whitePieceAudio();

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
    const victoryAudios = _gomokuAssets_js__WEBPACK_IMPORTED_MODULE_1__["default"].victoryAudios();

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
    const clickAudio = _gomokuAssets_js__WEBPACK_IMPORTED_MODULE_1__["default"].clickAudio();

    function playClickAudio() {
        clickAudio.currentTime = 0;
        clickAudio.play();
    }

    function hasController(name) {
        if (bank[`${name}`]) return true;
        return false;
    }

    function createLargeBtn(data) {
        const template = _gomokuTemplates_js__WEBPACK_IMPORTED_MODULE_0__["default"].largeBtn();
        const html = Mustache.render(template, data);
        const dummyContainer = document.createElement('div');
        dummyContainer.innerHTML = html;
        return dummyContainer.querySelector('.gomokuBtn');
    }

    function createPlayerController() {
        const template = _gomokuTemplates_js__WEBPACK_IMPORTED_MODULE_0__["default"].player();
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
        const template = _gomokuTemplates_js__WEBPACK_IMPORTED_MODULE_0__["default"].resizeConfirm();
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
        const template = _gomokuTemplates_js__WEBPACK_IMPORTED_MODULE_0__["default"].announceWinner();
        const data = { trophy: _gomokuAssets_js__WEBPACK_IMPORTED_MODULE_1__["default"].trophy() };
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
        const template = _gomokuTemplates_js__WEBPACK_IMPORTED_MODULE_0__["default"].controlBar();
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
        const background = _gomokuAssets_js__WEBPACK_IMPORTED_MODULE_1__["default"].background();
        const logo = _gomokuAssets_js__WEBPACK_IMPORTED_MODULE_1__["default"].logo();
        const template = _gomokuTemplates_js__WEBPACK_IMPORTED_MODULE_0__["default"].gomokuMain();
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
const gomoku = (() => {

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


/***/ }),

/***/ "./src/js/gomokuAssets.js":
/*!********************************!*\
  !*** ./src/js/gomokuAssets.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_gomoku_sound_victory1_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/gomoku/sound/victory1.wav */ "./src/assets/gomoku/sound/victory1.wav");
/* harmony import */ var _assets_gomoku_sound_victory2_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/gomoku/sound/victory2.wav */ "./src/assets/gomoku/sound/victory2.wav");
/* harmony import */ var _assets_gomoku_sound_victory3_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/gomoku/sound/victory3.wav */ "./src/assets/gomoku/sound/victory3.wav");
/* harmony import */ var _assets_gomoku_sound_blackPieceSound_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/gomoku/sound/blackPieceSound.wav */ "./src/assets/gomoku/sound/blackPieceSound.wav");
/* harmony import */ var _assets_gomoku_sound_whitePieceSound_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/gomoku/sound/whitePieceSound.wav */ "./src/assets/gomoku/sound/whitePieceSound.wav");
/* harmony import */ var _assets_gomoku_sound_buttonClick_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/gomoku/sound/buttonClick.wav */ "./src/assets/gomoku/sound/buttonClick.wav");
/* harmony import */ var _assets_gomoku_img_trophy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/gomoku/img/trophy.png */ "./src/assets/gomoku/img/trophy.png");
/* harmony import */ var _assets_gomoku_img_back_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/gomoku/img/back.png */ "./src/assets/gomoku/img/back.png");
/* harmony import */ var _assets_gomoku_img_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/gomoku/img/logo.png */ "./src/assets/gomoku/img/logo.png");
/* audio */






/* image */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    const bpa = new Audio(_assets_gomoku_sound_blackPieceSound_wav__WEBPACK_IMPORTED_MODULE_3__);
    const wpa = new Audio(_assets_gomoku_sound_whitePieceSound_wav__WEBPACK_IMPORTED_MODULE_4__);
    const va1 = new Audio(_assets_gomoku_sound_victory1_wav__WEBPACK_IMPORTED_MODULE_0__);
    const va2 = new Audio(_assets_gomoku_sound_victory2_wav__WEBPACK_IMPORTED_MODULE_1__);
    const va3 = new Audio(_assets_gomoku_sound_victory3_wav__WEBPACK_IMPORTED_MODULE_2__);
    const ca = new Audio(_assets_gomoku_sound_buttonClick_wav__WEBPACK_IMPORTED_MODULE_5__);

    function trophy() {
        return _assets_gomoku_img_trophy_png__WEBPACK_IMPORTED_MODULE_6__;
    }

    function blackPieceAudio() {
        return bpa;
    }

    function whitePieceAudio() {
        return wpa;
    }

    function clickAudio() {
        return ca;
    }

    function victoryAudios() {
        return [va1, va2, va3];
    }

    function background() {
        return _assets_gomoku_img_back_png__WEBPACK_IMPORTED_MODULE_7__;
    }

    function logo() {
        return _assets_gomoku_img_logo_png__WEBPACK_IMPORTED_MODULE_8__;
    }

    return { trophy, blackPieceAudio, whitePieceAudio, clickAudio, victoryAudios, background, logo };
})());

/***/ }),

/***/ "./src/js/gomokuTemplates.js":
/*!***********************************!*\
  !*** ./src/js/gomokuTemplates.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    function largeBtn() {
        const template = 
            `
            <div class="gomokuBtn btn-lg">
                <i class="icon material-icons">{{icon}}</i>
                <span class="text">{{text}}</span>
            </div>
            `;
        return template;
    }

    function announceWinner() {
        const template = 
            `
            <div class="gomokuPromptForm gomokuAnnounceWinner">
                <div class="inner">
                    <div class="trophy"><img src="{{trophy}}"></div>
                    <p class="text"></p>
                    <div class="btns">
                        <div class="gomokuBtn btn-lg confirm">Wow!</div>
                    </div>
                </div>
            </div>
            `;
        return template;
    }

    function resizeConfirm() {
        const template = 
            `
            <div class="gomokuPromptForm gomokuResizeConfirm">
                <div class="inner">
                    <p>End the current game and create a new board?</p>
                    <div class="btns"><div class="gomokuBtn btn-sm confirm">Confirm</div>
                        <div class="gomokuBtn btn-sm cancel">Cancel</div>
                    </div>
                </div>
            </div>
            `;
        return template;
    }

    function player() {
        const template = 
        `
        <div class="gomokuPlayer">
            <div class="black current">Black</div>
            <div class="white">White</div>
        </div>
        `;
        return template;
    }

    function controlBar() {
        const template = 
        `
            <div class="gomokuControlBar">
                <div class="control"> </div>
                <div class="title">Game Size</div>
                <div class="resize"></div>
            </div>
        `;
        return template;
    } 

    function gomokuMain() {
        const template = 
        `
            <div class="gomokuMain">
                <img src="{{background}}" alt="back" class="background1">
                <img src="{{background}}" alt="back" class="background2">
                <section class="header">
                    <div class="logo-img"><img src="{{logo}}"></div>
                    <div class="logo">GOMOKU</div>
                </section>
                <section class="board"></section>
                <section class="footer"></section>
            </div>
        `;
        return template;
    }

    return { largeBtn, announceWinner, resizeConfirm, player, controlBar, gomokuMain };
})());

/***/ }),

/***/ "./src/assets/gomoku/img/back.png":
/*!****************************************!*\
  !*** ./src/assets/gomoku/img/back.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d2e8896559516fa8780d.png";

/***/ }),

/***/ "./src/assets/gomoku/img/logo.png":
/*!****************************************!*\
  !*** ./src/assets/gomoku/img/logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3fc23b4b5267d39770e4.png";

/***/ }),

/***/ "./src/assets/gomoku/img/trophy.png":
/*!******************************************!*\
  !*** ./src/assets/gomoku/img/trophy.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/df7a130036b2cc07fe3f.png";

/***/ }),

/***/ "./src/assets/gomoku/sound/blackPieceSound.wav":
/*!*****************************************************!*\
  !*** ./src/assets/gomoku/sound/blackPieceSound.wav ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/91940e3f5c0dacec1c6c.wav";

/***/ }),

/***/ "./src/assets/gomoku/sound/buttonClick.wav":
/*!*************************************************!*\
  !*** ./src/assets/gomoku/sound/buttonClick.wav ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9ea56cbd4f6af09b2bc7.wav";

/***/ }),

/***/ "./src/assets/gomoku/sound/victory1.wav":
/*!**********************************************!*\
  !*** ./src/assets/gomoku/sound/victory1.wav ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a7022fca9be01d175603.wav";

/***/ }),

/***/ "./src/assets/gomoku/sound/victory2.wav":
/*!**********************************************!*\
  !*** ./src/assets/gomoku/sound/victory2.wav ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9b5b1a6223e1057f8898.wav";

/***/ }),

/***/ "./src/assets/gomoku/sound/victory3.wav":
/*!**********************************************!*\
  !*** ./src/assets/gomoku/sound/victory3.wav ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/790ebfba3e6de3e19686.wav";

/***/ }),

/***/ "./src/assets/gomoku/sound/whitePieceSound.wav":
/*!*****************************************************!*\
  !*** ./src/assets/gomoku/sound/whitePieceSound.wav ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0ff4ea852b22ca6a0714.wav";

/***/ }),

/***/ "./src/assets/img/github_black.png":
/*!*****************************************!*\
  !*** ./src/assets/img/github_black.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d8c6d6c90bdccf76d860.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gomoku_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gomoku.js */ "./src/js/gomoku.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _assets_img_github_black_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/github_black.png */ "./src/assets/img/github_black.png");




const initGomoku = (() => {

    const body = document.body;

    function insertFootSignature() {
        const year = new Date().getFullYear();
        const footerSignature = 
        `
        <div class="copyright">
            Copyright © hireme.shen@gmail.com 2021 - ${year}
        </div>
        <div class="source">Source code: <a href="https://github.com/helloShen/gomoku"><img class="github" src="${_assets_img_github_black_png__WEBPACK_IMPORTED_MODULE_2__}"></a></div>
        `;
        const footer = document.querySelector('.gomokuMain > .footer');
        footer.innerHTML = footerSignature;
    }

    function init() {
        _gomoku_js__WEBPACK_IMPORTED_MODULE_0__.gomoku.insertControlBar(body);
        _gomoku_js__WEBPACK_IMPORTED_MODULE_0__.gomoku.insertGomokuMain(body);
        insertFootSignature();
    }

    return { init };

})();

initGomoku.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZ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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdUNBQXVDO0FBQy9DO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxlQUFlO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxlQUFlO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0Esa0hBQWtILHlEQUFVLENBQUM7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLCtEQUF1QjtBQUMvQixRQUFRLCtEQUF1QjtBQUMvQjtBQUNBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbW9rdS8uL3NyYy9jc3MvZ29tb2t1LmNzcyIsIndlYnBhY2s6Ly9nb21va3UvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9nb21va3UvLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL2dvbW9rdS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ29tb2t1Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ29tb2t1Ly4vbm9kZV9tb2R1bGVzL211c3RhY2hlL211c3RhY2hlLmpzIiwid2VicGFjazovL2dvbW9rdS8uL3NyYy9jc3MvZ29tb2t1LmNzcz81ZDc2Iiwid2VicGFjazovL2dvbW9rdS8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vZ29tb2t1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dvbW9rdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ29tb2t1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dvbW9rdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nb21va3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nb21va3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nb21va3UvLi9zcmMvanMvZ29tb2t1LmpzIiwid2VicGFjazovL2dvbW9rdS8uL3NyYy9qcy9nb21va3VBc3NldHMuanMiLCJ3ZWJwYWNrOi8vZ29tb2t1Ly4vc3JjL2pzL2dvbW9rdVRlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9nb21va3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29tb2t1L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dvbW9rdS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29tb2t1L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ29tb2t1L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29tb2t1L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29tb2t1L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dvbW9rdS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBub3JtYWxpemF0aW9uICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLyogZ29tb2t1ICovXFxuOnJvb3Qge1xcbiAgICAvKiBib2FyZCBmcm9udCBsYXllciAqL1xcbiAgICAtLWdvbW9rdS1zaXplOiAxNTtcXG4gICAgLS1nb21va3UtZ3JpZC1yYWRpdXM6IDFyZW07XFxuICAgIC0tZ29tb2t1LWdyaWQtbGVuZ3RoOiBjYWxjKHZhcigtLWdvbW9rdS1ncmlkLXJhZGl1cykgKiAyKTtcXG4gICAgLS1nb21va3UtbGVuZ3RoOiBjYWxjKHZhcigtLWdvbW9rdS1zaXplKSAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpO1xcbiAgICAvKiBib2FyZCBiYWNrIGxheWVyICovXFxuICAgIC0tZ29tb2t1LWJhY2stc2l6ZTogY2FsYyh2YXIoLS1nb21va3Utc2l6ZSkgKiAyKTtcXG4gICAgLS1nb21va3UtYmFjay1ncmlkLXJhZGl1czogY2FsYyh2YXIoLS1nb21va3UtZ3JpZC1yYWRpdXMpIC8gMik7XFxuICAgIC0tZ29tb2t1LWJhY2stZ3JpZC1sZW5ndGg6IGNhbGModmFyKC0tZ29tb2t1LWJhY2stZ3JpZC1yYWRpdXMpICogMik7XFxuICAgIC8qIGNvbG9ycyAqL1xcbiAgICAtLWdvbW9rdS1ib2FyZC1jbGFzc2ljLXllbGxvdzogI0RDQjM1QztcXG4gICAgLS1nb21va3UtYm9hcmQtZ29sZGVuLTcwMDogI2E2N2MwMDtcXG4gICAgLS1nb21va3UtYm9hcmQtZ29sZGVuLTUwMDogI2ZmYmYwMDtcXG4gICAgLS1nb21va3UtYm9hcmQtZ29sZGVuLTMwMDogI2ZmY2Y0MDtcXG4gICAgLS1nb21va3UtYm9hcmQtZ29sZGVuLTEwMDogI2ZmZGM3MztcXG4gICAgLS1nb21va3Utd2hpdGU6ICNGQUY4RkY7XFxuICAgIC0tZ29tb2t1LWdyYXktMTAwOiAjRTVFNUU1O1xcbiAgICAtLWdvbW9rdS1ncmF5LTMwMDogI0IyQjJCMjtcXG4gICAgLS1nb21va3UtZ3JheS01MDA6ICM4MzgzODM7XFxuICAgIC0tZ29tb2t1LWdyYXktNzAwOiAjNTY1NjU2O1xcbiAgICAtLWdvbW9rdS1tdXRlZDogIzAwMDAwMDQ0O1xcbiAgICAtLWdvbW9rdS1ibGFjazogIzJDMkMyQztcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1ibGFjay10cmFuc2x1Y2VudDogIzAwMDAwMEFBO1xcbiAgICAtLXdoaXRlLXRyYW5zbHVjZW50OiAjRkZGRkZGQUE7XFxufVxcblxcbi5nb21va3VCb2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLS1zaXplOiB2YXIoLS1nb21va3UtbGVuZ3RoKTtcXG4gICAgd2lkdGg6ICB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaXplKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1zaXplKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRCYWNrZ3JvdW5kIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHdpZHRoOiBjYWxjKGNhbGModmFyKC0tZ29tb2t1LWJhY2stZ3JpZC1sZW5ndGgpICogY2FsYyh2YXIoLS1nb21va3Utc2l6ZSkgKiAyKSkpO1xcbiAgICAvKiB3aWR0aDogY2FsYyhjYWxjKHZhcigtLWdvbW9rdS1iYWNrLWdyaWQtbGVuZ3RoKSAqIGNhbGMoY2FsYyh2YXIoLS1nb21va3Utc2l6ZSkgLSAxKSAqIDIpKSk7ICovXFxuICAgIGhlaWdodDogY2FsYyhjYWxjKHZhcigtLWdvbW9rdS1iYWNrLWdyaWQtbGVuZ3RoKSAqIGNhbGModmFyKC0tZ29tb2t1LXNpemUpICogMikpKTsgXFxuICAgIC8qIGhlaWdodDogY2FsYyhjYWxjKHZhcigtLWdvbW9rdS1iYWNrLWdyaWQtbGVuZ3RoKSAqIGNhbGMoY2FsYyh2YXIoLS1nb21va3Utc2l6ZSkgLSAxKSAqIDIpKSk7ICAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb21va3Utd2hpdGUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRCYWNrTGF5ZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgd2lkdGg6ICB2YXIoLS1nb21va3UtbGVuZ3RoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1nb21va3UtbGVuZ3RoKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tZ29tb2t1LWJhY2stc2l6ZSksIHZhcigtLWdvbW9rdS1iYWNrLWdyaWQtbGVuZ3RoKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWdvbW9rdS1iYWNrLXNpemUpLCB2YXIoLS1nb21va3UtYmFjay1ncmlkLWxlbmd0aCkpO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRCYWNrTGF5ZXIgPiAuZ3JpZC5ib3JkZXJCb3R0b20ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ29tb2t1LWdyYXktMzAwKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkQmFja0xheWVyID4gLmdyaWQuYm9yZGVyUmlnaHQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1nb21va3UtZ3JheS0zMDApO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRNaWRMYXllciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgd2lkdGg6IGNhbGMoY2FsYyh2YXIoLS1nb21va3UtYmFjay1ncmlkLWxlbmd0aCkgKiBjYWxjKHZhcigtLWdvbW9rdS1zaXplKSAqIDIpKSk7XFxuICAgIC8qIHdpZHRoOiBjYWxjKGNhbGModmFyKC0tZ29tb2t1LWJhY2stZ3JpZC1sZW5ndGgpICogY2FsYyhjYWxjKHZhcigtLWdvbW9rdS1zaXplKSAtIDEpICogMikpKTsgKi9cXG4gICAgaGVpZ2h0OiBjYWxjKGNhbGModmFyKC0tZ29tb2t1LWJhY2stZ3JpZC1sZW5ndGgpICogY2FsYyh2YXIoLS1nb21va3Utc2l6ZSkgKiAyKSkpO1xcbiAgICAvKiBoZWlnaHQ6IGNhbGMoY2FsYyh2YXIoLS1nb21va3UtYmFjay1ncmlkLWxlbmd0aCkgKiBjYWxjKGNhbGModmFyKC0tZ29tb2t1LXNpemUpIC0gMSkgKiAyKSkpOyAqL1xcbiAgICBib3JkZXI6IC4yNXJlbSBzb2xpZCB2YXIoLS1nb21va3UtYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgei1pbmRleDogMztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRNaWRMYXllciA+IC5kb3Qge1xcbiAgICAtLWRvdC1zaXplOiAuNXJlbTtcXG4gICAgd2lkdGg6IHZhcigtLWRvdC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1kb3Qtc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbW9rdS1ncmF5LTMwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoY2FsYyh2YXIoLS1kb3Qtc2l6ZSkgLyAyKSAtIDFweCk7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5nb21va3VCb2FyZE1pZExheWVyID4gLmRvdC5kb3QxIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1kb3Qtc2l6ZSkgLyAtMikpIHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1kb3Qtc2l6ZSkgLyAtMikpO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRNaWRMYXllciA+IC5kb3QuZG90MiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDMuNSAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpO1xcbiAgICBsZWZ0OiBjYWxjKDMuNSAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpO1xcbiAgICAvKiB0b3A6IGNhbGMoMyAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpOyAqL1xcbiAgICAvKiBsZWZ0OiBjYWxjKDMgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTsgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0tZG90LXNpemUpIC8gLTIpKSB0cmFuc2xhdGVZKGNhbGModmFyKC0tZG90LXNpemUpIC8gLTIpKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkTWlkTGF5ZXIgPiAuZG90LmRvdDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYygzLjUgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgcmlnaHQ6IGNhbGMoMy41ICogdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7XFxuICAgIC8qIHRvcDogY2FsYygzICogdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7ICovXFxuICAgIC8qIHJpZ2h0OiBjYWxjKDMgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTsgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0tZG90LXNpemUpIC8gMikpIHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1kb3Qtc2l6ZSkgLyAtMikpO1xcbn1cXG4uZ29tb2t1Qm9hcmRNaWRMYXllciA+IC5kb3QuZG90NCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiBjYWxjKDMuNSAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpO1xcbiAgICBsZWZ0OiBjYWxjKDMuNSAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpO1xcbiAgICAvKiBib3R0b206IGNhbGMoMyAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpOyAqL1xcbiAgICAvKiBsZWZ0OiBjYWxjKDMgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTsgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0tZG90LXNpemUpIC8gLTIpKSB0cmFuc2xhdGVZKGNhbGModmFyKC0tZG90LXNpemUpIC8gMikpO1xcbn1cXG4uZ29tb2t1Qm9hcmRNaWRMYXllciA+IC5kb3QuZG90NSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiBjYWxjKDMuNSAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpO1xcbiAgICByaWdodDogY2FsYygzLjUgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgLyogYm90dG9tOiBjYWxjKDMgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTsgKi9cXG4gICAgLyogcmlnaHQ6IGNhbGMoMyAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpOyAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1kb3Qtc2l6ZSkgLyAyKSkgdHJhbnNsYXRlWShjYWxjKHZhcigtLWRvdC1zaXplKSAvIDIpKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgd2lkdGg6ICB2YXIoLS1nb21va3UtbGVuZ3RoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1nb21va3UtbGVuZ3RoKTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tZ29tb2t1LXNpemUpLCB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tZ29tb2t1LXNpemUpLCB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllciA+IC5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRGcm9udExheWVyID4gLmdyaWQgPiAucGllY2Uge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpICogMC45KTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkgKiAwLjkpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkgLyAyKTtcXG4gICAgZm9udC1zaXplOiAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllciA+IC5ncmlkID4gLnBpZWNlLmJsYWNrLmxhc3RQaWVjZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbW9rdS1ib2FyZC1nb2xkZW4tNTAwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRGcm9udExheWVyID4gLmdyaWQgPiAucGllY2Uud2hpdGUubGFzdFBpZWNlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29tb2t1LWJvYXJkLWdvbGRlbi03MDApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5nb21va3VCb2FyZEZyb250TGF5ZXIgPiAuZ3JpZCA+IC5waWVjZS5ibGFjayB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29tb2t1LWJsYWNrKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllciA+IC5ncmlkID4gLnBpZWNlLndoaXRlIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb21va3Utd2hpdGUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb21va3UtYmxhY2spO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRGcm9udExheWVyLnNob3dOdW1iZXIgPiAuZ3JpZCA+IC5waWVjZS5ibGFjayB7XFxuICAgIGNvbG9yOiB2YXIoLS1nb21va3Utd2hpdGUpO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRGcm9udExheWVyLnNob3dOdW1iZXIgPiAuZ3JpZCA+IC5waWVjZS53aGl0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1nb21va3UtYmxhY2spO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRGcm9udExheWVyID4gLmdyaWQgPiAucGllY2UucGhhbnRvbSB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4uZ29tb2t1UHJvbXB0Rm9ybSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb21va3UtbXV0ZWQpO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VQcm9tcHRGb3JtID4gLmlubmVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbW9rdS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VQcm9tcHRGb3JtIC5idG5zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1UmVzaXplQ29uZmlybSA+IC5pbm5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNC41cmVtIDQuNXJlbTtcXG59XFxuXFxuLmdvbW9rdUFubm91bmNlV2lubmVyID4gLmlubmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNnJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIDIuNXJlbSA0cmVtO1xcbiAgICBhbmltYXRpb246IGdvbW9rdVdpbm5lckFuaW1hdGlvbiAuNXMgZWFzZS1pbiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBnb21va3VXaW5uZXJBbmltYXRpb24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG4gICAgfVxcbn1cXG5cXG4uZ29tb2t1QW5ub3VuY2VXaW5uZXIgLnRyb3BoeSB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbi5nb21va3VBbm5vdW5jZVdpbm5lciAudHJvcGh5ID4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmdvbW9rdUJ0biB7XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLWdvbW9rdS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbW9rdS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1QnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29tb2t1LWdyYXktNzAwKTtcXG59XFxuXFxuLmdvbW9rdVBsYXllciB7XFxuICAgIC0tcGllY2Utc2l6ZTogM3JlbTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1waWVjZS1zaXplKTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tcGllY2Utc2l6ZSkgdmFyKC0tcGllY2Utc2l6ZSk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZ29tb2t1UGxheWVyIC5ibGFjayxcXG4uZ29tb2t1UGxheWVyIC53aGl0ZSB7XFxuICAgIGhlaWdodDogdmFyKC0tcGllY2Utc2l6ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1waWVjZS1zaXplKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1waWVjZS1zaXplKSAvIDIpO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdvbW9rdVBsYXllciAuYmxhY2suY3VycmVudCxcXG4uZ29tb2t1UGxheWVyIC53aGl0ZS5jdXJyZW50IHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tZ29tb2t1LWJvYXJkLWdvbGRlbi01MDApO1xcbn1cXG5cXG4uZ29tb2t1UGxheWVyIC5ibGFjayB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29tb2t1LWJsYWNrKTtcXG59XFxuXFxuLmdvbW9rdVBsYXllciAud2hpdGUge1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5nb21va3VCdG4ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmdvbW9rdUJ0bjphY3RpdmUsXFxuLmdvbW9rdUJ0bi5jdXJyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29tb2t1LXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLWdvbW9rdS1ibGFjayk7XFxufVxcblxcbi5nb21va3VCdG4uYnRuLWxnIHtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uZ29tb2t1QnRuLmJ0bi1zbSB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuLmdvbW9rdUNvbnRyb2xCYXIge1xcbiAgICB3aWR0aDogMTJyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbW9rdS1ibGFjayk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggNHB4IHZhcigtLWJsYWNrLXRyYW5zbHVjZW50KTtcXG4gICAgb3BhY2l0eTogLjk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VDb250cm9sQmFyID4gLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5nb21va3VNYWluIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMzZyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOHJlbSAxZnIgM3JlbTtcXG59XFxuXFxuLmdvbW9rdU1haW4gPiBpbWcge1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VNYWluID4gaW1nLmJhY2tncm91bmQxIHtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSB0cmFuc2xhdGVYKC0yNDBweCkgdHJhbnNsYXRlWSg2MHB4KTtcXG4gICAgei1pbmRleDogLTI7XFxufVxcblxcbi5nb21va3VNYWluID4gaW1nLmJhY2tncm91bmQyIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZykgdHJhbnNsYXRlWCgxNjBweCkgdHJhbnNsYXRlWSgxNjBweCk7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uZ29tb2t1TWFpbiA+IC5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdvbW9rdU1haW4gLmxvZ28taW1nIHtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiAzLjVyZW07XFxufVxcblxcbi5nb21va3VNYWluIC5sb2dvLWltZyA+IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nb21va3VNYWluIC5sb2dvIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ29tb2t1LWJvYXJkLWdvbGRlbi03MDApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VNYWluID4gLmJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdvbW9rdU1haW4gPiAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiAxO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIG1pbi13aWR0aDogMzByZW07XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dvbW9rdS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUEsa0JBQWtCO0FBQ2xCOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBKQUEwSjtBQUM5Sjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pC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QUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTsgXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJyk7XFxuXFxuLyogbm9ybWFsaXphdGlvbiAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbi8qIGdvbW9rdSAqL1xcbjpyb290IHtcXG4gICAgLyogYm9hcmQgZnJvbnQgbGF5ZXIgKi9cXG4gICAgLS1nb21va3Utc2l6ZTogMTU7XFxuICAgIC0tZ29tb2t1LWdyaWQtcmFkaXVzOiAxcmVtO1xcbiAgICAtLWdvbW9rdS1ncmlkLWxlbmd0aDogY2FsYyh2YXIoLS1nb21va3UtZ3JpZC1yYWRpdXMpICogMik7XFxuICAgIC0tZ29tb2t1LWxlbmd0aDogY2FsYyh2YXIoLS1nb21va3Utc2l6ZSkgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgLyogYm9hcmQgYmFjayBsYXllciAqL1xcbiAgICAtLWdvbW9rdS1iYWNrLXNpemU6IGNhbGModmFyKC0tZ29tb2t1LXNpemUpICogMik7XFxuICAgIC0tZ29tb2t1LWJhY2stZ3JpZC1yYWRpdXM6IGNhbGModmFyKC0tZ29tb2t1LWdyaWQtcmFkaXVzKSAvIDIpO1xcbiAgICAtLWdvbW9rdS1iYWNrLWdyaWQtbGVuZ3RoOiBjYWxjKHZhcigtLWdvbW9rdS1iYWNrLWdyaWQtcmFkaXVzKSAqIDIpO1xcbiAgICAvKiBjb2xvcnMgKi9cXG4gICAgLS1nb21va3UtYm9hcmQtY2xhc3NpYy15ZWxsb3c6ICNEQ0IzNUM7XFxuICAgIC0tZ29tb2t1LWJvYXJkLWdvbGRlbi03MDA6ICNhNjdjMDA7XFxuICAgIC0tZ29tb2t1LWJvYXJkLWdvbGRlbi01MDA6ICNmZmJmMDA7XFxuICAgIC0tZ29tb2t1LWJvYXJkLWdvbGRlbi0zMDA6ICNmZmNmNDA7XFxuICAgIC0tZ29tb2t1LWJvYXJkLWdvbGRlbi0xMDA6ICNmZmRjNzM7XFxuICAgIC0tZ29tb2t1LXdoaXRlOiAjRkFGOEZGO1xcbiAgICAtLWdvbW9rdS1ncmF5LTEwMDogI0U1RTVFNTtcXG4gICAgLS1nb21va3UtZ3JheS0zMDA6ICNCMkIyQjI7XFxuICAgIC0tZ29tb2t1LWdyYXktNTAwOiAjODM4MzgzO1xcbiAgICAtLWdvbW9rdS1ncmF5LTcwMDogIzU2NTY1NjtcXG4gICAgLS1nb21va3UtbXV0ZWQ6ICMwMDAwMDA0NDtcXG4gICAgLS1nb21va3UtYmxhY2s6ICMyQzJDMkM7XFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxuICAgIC0tYmxhY2s6ICMwMDAwMDA7XFxuICAgIC0tYmxhY2stdHJhbnNsdWNlbnQ6ICMwMDAwMDBBQTtcXG4gICAgLS13aGl0ZS10cmFuc2x1Y2VudDogI0ZGRkZGRkFBO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC0tc2l6ZTogdmFyKC0tZ29tb2t1LWxlbmd0aCk7XFxuICAgIHdpZHRoOiAgdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2l6ZSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tc2l6ZSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdvbW9rdUJvYXJkQmFja2dyb3VuZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB3aWR0aDogY2FsYyhjYWxjKHZhcigtLWdvbW9rdS1iYWNrLWdyaWQtbGVuZ3RoKSAqIGNhbGModmFyKC0tZ29tb2t1LXNpemUpICogMikpKTtcXG4gICAgLyogd2lkdGg6IGNhbGMoY2FsYyh2YXIoLS1nb21va3UtYmFjay1ncmlkLWxlbmd0aCkgKiBjYWxjKGNhbGModmFyKC0tZ29tb2t1LXNpemUpIC0gMSkgKiAyKSkpOyAqL1xcbiAgICBoZWlnaHQ6IGNhbGMoY2FsYyh2YXIoLS1nb21va3UtYmFjay1ncmlkLWxlbmd0aCkgKiBjYWxjKHZhcigtLWdvbW9rdS1zaXplKSAqIDIpKSk7IFxcbiAgICAvKiBoZWlnaHQ6IGNhbGMoY2FsYyh2YXIoLS1nb21va3UtYmFjay1ncmlkLWxlbmd0aCkgKiBjYWxjKGNhbGModmFyKC0tZ29tb2t1LXNpemUpIC0gMSkgKiAyKSkpOyAgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29tb2t1LXdoaXRlKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkQmFja0xheWVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHdpZHRoOiAgdmFyKC0tZ29tb2t1LWxlbmd0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tZ29tb2t1LWxlbmd0aCk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWdvbW9rdS1iYWNrLXNpemUpLCB2YXIoLS1nb21va3UtYmFjay1ncmlkLWxlbmd0aCkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1nb21va3UtYmFjay1zaXplKSwgdmFyKC0tZ29tb2t1LWJhY2stZ3JpZC1sZW5ndGgpKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkQmFja0xheWVyID4gLmdyaWQuYm9yZGVyQm90dG9tIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdvbW9rdS1ncmF5LTMwMCk7XFxufVxcblxcbi5nb21va3VCb2FyZEJhY2tMYXllciA+IC5ncmlkLmJvcmRlclJpZ2h0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZ29tb2t1LWdyYXktMzAwKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkTWlkTGF5ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIHdpZHRoOiBjYWxjKGNhbGModmFyKC0tZ29tb2t1LWJhY2stZ3JpZC1sZW5ndGgpICogY2FsYyh2YXIoLS1nb21va3Utc2l6ZSkgKiAyKSkpO1xcbiAgICAvKiB3aWR0aDogY2FsYyhjYWxjKHZhcigtLWdvbW9rdS1iYWNrLWdyaWQtbGVuZ3RoKSAqIGNhbGMoY2FsYyh2YXIoLS1nb21va3Utc2l6ZSkgLSAxKSAqIDIpKSk7ICovXFxuICAgIGhlaWdodDogY2FsYyhjYWxjKHZhcigtLWdvbW9rdS1iYWNrLWdyaWQtbGVuZ3RoKSAqIGNhbGModmFyKC0tZ29tb2t1LXNpemUpICogMikpKTtcXG4gICAgLyogaGVpZ2h0OiBjYWxjKGNhbGModmFyKC0tZ29tb2t1LWJhY2stZ3JpZC1sZW5ndGgpICogY2FsYyhjYWxjKHZhcigtLWdvbW9rdS1zaXplKSAtIDEpICogMikpKTsgKi9cXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgdmFyKC0tZ29tb2t1LWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkTWlkTGF5ZXIgPiAuZG90IHtcXG4gICAgLS1kb3Qtc2l6ZTogLjVyZW07XFxuICAgIHdpZHRoOiB2YXIoLS1kb3Qtc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tZG90LXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb21va3UtZ3JheS0zMDApO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKGNhbGModmFyKC0tZG90LXNpemUpIC8gMikgLSAxcHgpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRNaWRMYXllciA+IC5kb3QuZG90MSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0tZG90LXNpemUpIC8gLTIpKSB0cmFuc2xhdGVZKGNhbGModmFyKC0tZG90LXNpemUpIC8gLTIpKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkTWlkTGF5ZXIgPiAuZG90LmRvdDIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYygzLjUgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgbGVmdDogY2FsYygzLjUgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgLyogdG9wOiBjYWxjKDMgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTsgKi9cXG4gICAgLyogbGVmdDogY2FsYygzICogdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7ICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLWRvdC1zaXplKSAvIC0yKSkgdHJhbnNsYXRlWShjYWxjKHZhcigtLWRvdC1zaXplKSAvIC0yKSk7XFxufVxcblxcbi5nb21va3VCb2FyZE1pZExheWVyID4gLmRvdC5kb3QzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoMy41ICogdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7XFxuICAgIHJpZ2h0OiBjYWxjKDMuNSAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpO1xcbiAgICAvKiB0b3A6IGNhbGMoMyAqIHZhcigtLWdvbW9rdS1ncmlkLWxlbmd0aCkpOyAqL1xcbiAgICAvKiByaWdodDogY2FsYygzICogdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7ICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLWRvdC1zaXplKSAvIDIpKSB0cmFuc2xhdGVZKGNhbGModmFyKC0tZG90LXNpemUpIC8gLTIpKTtcXG59XFxuLmdvbW9rdUJvYXJkTWlkTGF5ZXIgPiAuZG90LmRvdDQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogY2FsYygzLjUgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgbGVmdDogY2FsYygzLjUgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgLyogYm90dG9tOiBjYWxjKDMgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTsgKi9cXG4gICAgLyogbGVmdDogY2FsYygzICogdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7ICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLWRvdC1zaXplKSAvIC0yKSkgdHJhbnNsYXRlWShjYWxjKHZhcigtLWRvdC1zaXplKSAvIDIpKTtcXG59XFxuLmdvbW9rdUJvYXJkTWlkTGF5ZXIgPiAuZG90LmRvdDUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogY2FsYygzLjUgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTtcXG4gICAgcmlnaHQ6IGNhbGMoMy41ICogdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7XFxuICAgIC8qIGJvdHRvbTogY2FsYygzICogdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7ICovXFxuICAgIC8qIHJpZ2h0OiBjYWxjKDMgKiB2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpKTsgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0tZG90LXNpemUpIC8gMikpIHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1kb3Qtc2l6ZSkgLyAyKSk7XFxufVxcblxcbi5nb21va3VCb2FyZEZyb250TGF5ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIHdpZHRoOiAgdmFyKC0tZ29tb2t1LWxlbmd0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tZ29tb2t1LWxlbmd0aCk7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWdvbW9rdS1zaXplKSwgdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWdvbW9rdS1zaXplKSwgdmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSk7XFxufVxcblxcbi5nb21va3VCb2FyZEZyb250TGF5ZXIgPiAuZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllciA+IC5ncmlkID4gLnBpZWNlIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ29tb2t1LWdyaWQtbGVuZ3RoKSAqIDAuOSk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpICogMC45KTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1nb21va3UtZ3JpZC1sZW5ndGgpIC8gMik7XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VCb2FyZEZyb250TGF5ZXIgPiAuZ3JpZCA+IC5waWVjZS5ibGFjay5sYXN0UGllY2Uge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb21va3UtYm9hcmQtZ29sZGVuLTUwMCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllciA+IC5ncmlkID4gLnBpZWNlLndoaXRlLmxhc3RQaWVjZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbW9rdS1ib2FyZC1nb2xkZW4tNzAwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZ29tb2t1Qm9hcmRGcm9udExheWVyID4gLmdyaWQgPiAucGllY2UuYmxhY2sge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbW9rdS1ibGFjayk7XFxufVxcblxcbi5nb21va3VCb2FyZEZyb250TGF5ZXIgPiAuZ3JpZCA+IC5waWVjZS53aGl0ZSB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29tb2t1LXdoaXRlKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29tb2t1LWJsYWNrKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllci5zaG93TnVtYmVyID4gLmdyaWQgPiAucGllY2UuYmxhY2sge1xcbiAgICBjb2xvcjogdmFyKC0tZ29tb2t1LXdoaXRlKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllci5zaG93TnVtYmVyID4gLmdyaWQgPiAucGllY2Uud2hpdGUge1xcbiAgICBjb2xvcjogdmFyKC0tZ29tb2t1LWJsYWNrKTtcXG59XFxuXFxuLmdvbW9rdUJvYXJkRnJvbnRMYXllciA+IC5ncmlkID4gLnBpZWNlLnBoYW50b20ge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmdvbW9rdVByb21wdEZvcm0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29tb2t1LW11dGVkKTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1UHJvbXB0Rm9ybSA+IC5pbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb21va3Utd2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1UHJvbXB0Rm9ybSAuYnRucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdvbW9rdVJlc2l6ZUNvbmZpcm0gPiAuaW5uZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQuNXJlbSA0LjVyZW07XFxufVxcblxcbi5nb21va3VBbm5vdW5jZVdpbm5lciA+IC5pbm5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAyLjVyZW0gNHJlbTtcXG4gICAgYW5pbWF0aW9uOiBnb21va3VXaW5uZXJBbmltYXRpb24gLjVzIGVhc2UtaW4gZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZ29tb2t1V2lubmVyQW5pbWF0aW9uIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuICAgIH1cXG59XFxuXFxuLmdvbW9rdUFubm91bmNlV2lubmVyIC50cm9waHkge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG4uZ29tb2t1QW5ub3VuY2VXaW5uZXIgLnRyb3BoeSA+IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nb21va3VCdG4ge1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1nb21va3Utd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb21va3UtYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdvbW9rdUJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbW9rdS1ncmF5LTcwMCk7XFxufVxcblxcbi5nb21va3VQbGF5ZXIge1xcbiAgICAtLXBpZWNlLXNpemU6IDNyZW07XFxuICAgIGhlaWdodDogdmFyKC0tcGllY2Utc2l6ZSk7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDFyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXBpZWNlLXNpemUpIHZhcigtLXBpZWNlLXNpemUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmdvbW9rdVBsYXllciAuYmxhY2ssXFxuLmdvbW9rdVBsYXllciAud2hpdGUge1xcbiAgICBoZWlnaHQ6IHZhcigtLXBpZWNlLXNpemUpO1xcbiAgICB3aWR0aDogdmFyKC0tcGllY2Utc2l6ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGllY2Utc2l6ZSkgLyAyKTtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VQbGF5ZXIgLmJsYWNrLmN1cnJlbnQsXFxuLmdvbW9rdVBsYXllciAud2hpdGUuY3VycmVudCB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWdvbW9rdS1ib2FyZC1nb2xkZW4tNTAwKTtcXG59XFxuXFxuLmdvbW9rdVBsYXllciAuYmxhY2sge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbW9rdS1ibGFjayk7XFxufVxcblxcbi5nb21va3VQbGF5ZXIgLndoaXRlIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uZ29tb2t1QnRuIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5nb21va3VCdG46YWN0aXZlLFxcbi5nb21va3VCdG4uY3VycmVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbW9rdS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1nb21va3UtYmxhY2spO1xcbn1cXG5cXG4uZ29tb2t1QnRuLmJ0bi1sZyB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmdvbW9rdUJ0bi5idG4tc20ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XFxuICAgIG1hcmdpbjogLjVyZW07XFxufVxcblxcbi5nb21va3VDb250cm9sQmFyIHtcXG4gICAgd2lkdGg6IDEycmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb21va3UtYmxhY2spO1xcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDRweCB2YXIoLS1ibGFjay10cmFuc2x1Y2VudCk7XFxuICAgIG9wYWNpdHk6IC45O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1Q29udHJvbEJhciA+IC50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uZ29tb2t1TWFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDM2cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDhyZW0gMWZyIDNyZW07XFxufVxcblxcbi5nb21va3VNYWluID4gaW1nIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1TWFpbiA+IGltZy5iYWNrZ3JvdW5kMSB7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgdHJhbnNsYXRlWCgtMjQwcHgpIHRyYW5zbGF0ZVkoNjBweCk7XFxuICAgIHotaW5kZXg6IC0yO1xcbn1cXG5cXG4uZ29tb2t1TWFpbiA+IGltZy5iYWNrZ3JvdW5kMiB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpIHRyYW5zbGF0ZVgoMTYwcHgpIHRyYW5zbGF0ZVkoMTYwcHgpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmdvbW9rdU1haW4gPiAuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VNYWluIC5sb2dvLWltZyB7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG4uZ29tb2t1TWFpbiAubG9nby1pbWcgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ29tb2t1TWFpbiAubG9nbyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdvbW9rdS1ib2FyZC1nb2xkZW4tNzAwKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ29tb2t1TWFpbiA+IC5ib2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nb21va3VNYWluID4gLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gMTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm0uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ29tb2t1LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLWdyYXktMTAwOiAjRTVFNUU1O1xcbiAgICAtLWdyYXktMzAwOiAjQjJCMkIyO1xcbiAgICAtLWdyYXktNTAwOiAjODM4MzgzO1xcbiAgICAtLWdyYXktNzAwOiAjNTY1NjU2O1xcbiAgICAtLWJsYWNrOiAjMDAwMDAwO1xcbiAgICAtLWJsYWNrLXRyYW5zbHVjZW50OiAjMDAwMDAwQUE7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMnJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4uZm9vdGVyID4gLmNvcHlyaWdodCxcXG4uZm9vdGVyID4gLnNvdXJjZSB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW46IC43NXJlbSAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgPiAuc291cmNlIHtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnNvdXJjZSA+IGEge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLnNvdXJjZSA+IGEgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCguL25vcm0uY3NzKTtcXG5AaW1wb3J0IHVybCguL2dvbW9rdS5jc3MpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS1ncmF5LTEwMDogI0U1RTVFNTtcXG4gICAgLS1ncmF5LTMwMDogI0IyQjJCMjtcXG4gICAgLS1ncmF5LTUwMDogIzgzODM4MztcXG4gICAgLS1ncmF5LTcwMDogIzU2NTY1NjtcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1ibGFjay10cmFuc2x1Y2VudDogIzAwMDAwMEFBO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTJyZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLmZvb3RlciA+IC5jb3B5cmlnaHQsXFxuLmZvb3RlciA+IC5zb3VyY2Uge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAuNzVyZW0gLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyID4gLnNvdXJjZSB7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5zb3VyY2UgPiBhIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5zb3VyY2UgPiBhID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxudWwsXFxub2wge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMEpBQTBKO0FBQzlKOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxudWwsXFxub2wge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLk11c3RhY2hlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qIVxuICAgKiBtdXN0YWNoZS5qcyAtIExvZ2ljLWxlc3Mge3ttdXN0YWNoZX19IHRlbXBsYXRlcyB3aXRoIEphdmFTY3JpcHRcbiAgICogaHR0cDovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qc1xuICAgKi9cblxuICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vcmUgY29ycmVjdCB0eXBlb2Ygc3RyaW5nIGhhbmRsaW5nIGFycmF5XG4gICAqIHdoaWNoIG5vcm1hbGx5IHJldHVybnMgdHlwZW9mICdvYmplY3QnXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlU3RyIChvYmopIHtcbiAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOdWxsIHNhZmUgd2F5IG9mIGNoZWNraW5nIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCxcbiAgICogaW5jbHVkaW5nIGl0cyBwcm90b3R5cGUsIGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gICAqL1xuICBmdW5jdGlvbiBoYXNQcm9wZXJ0eSAob2JqLCBwcm9wTmFtZSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAocHJvcE5hbWUgaW4gb2JqKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYWZlIHdheSBvZiBkZXRlY3Rpbmcgd2hldGhlciBvciBub3QgdGhlIGdpdmVuIHRoaW5nIGlzIGEgcHJpbWl0aXZlIGFuZFxuICAgKiB3aGV0aGVyIGl0IGhhcyB0aGUgZ2l2ZW4gcHJvcGVydHlcbiAgICovXG4gIGZ1bmN0aW9uIHByaW1pdGl2ZUhhc093blByb3BlcnR5IChwcmltaXRpdmUsIHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHByaW1pdGl2ZSAhPSBudWxsXG4gICAgICAmJiB0eXBlb2YgcHJpbWl0aXZlICE9PSAnb2JqZWN0J1xuICAgICAgJiYgcHJpbWl0aXZlLmhhc093blByb3BlcnR5XG4gICAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ09VQ0hEQi01NzdcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8xODlcbiAgdmFyIHJlZ0V4cFRlc3QgPSBSZWdFeHAucHJvdG90eXBlLnRlc3Q7XG4gIGZ1bmN0aW9uIHRlc3RSZWdFeHAgKHJlLCBzdHJpbmcpIHtcbiAgICByZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIG5vblNwYWNlUmUgPSAvXFxTLztcbiAgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gIXRlc3RSZWdFeHAobm9uU3BhY2VSZSwgc3RyaW5nKTtcbiAgfVxuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcvJzogJyYjeDJGOycsXG4gICAgJ2AnOiAnJiN4NjA7JyxcbiAgICAnPSc6ICcmI3gzRDsnXG4gIH07XG5cbiAgZnVuY3Rpb24gZXNjYXBlSHRtbCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB3aGl0ZVJlID0gL1xccyovO1xuICB2YXIgc3BhY2VSZSA9IC9cXHMrLztcbiAgdmFyIGVxdWFsc1JlID0gL1xccyo9LztcbiAgdmFyIGN1cmx5UmUgPSAvXFxzKlxcfS87XG4gIHZhciB0YWdSZSA9IC8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO1xuXG4gIC8qKlxuICAgKiBCcmVha3MgdXAgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgc3RyaW5nIGludG8gYSB0cmVlIG9mIHRva2Vucy4gSWYgdGhlIGB0YWdzYFxuICAgKiBhcmd1bWVudCBpcyBnaXZlbiBoZXJlIGl0IG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d28gc3RyaW5nIHZhbHVlczogdGhlXG4gICAqIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAoZS5nLiBbIFwiPCVcIiwgXCIlPlwiIF0pLiBPZlxuICAgKiBjb3Vyc2UsIHRoZSBkZWZhdWx0IGlzIHRvIHVzZSBtdXN0YWNoZXMgKGkuZS4gbXVzdGFjaGUudGFncykuXG4gICAqXG4gICAqIEEgdG9rZW4gaXMgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCA0IGVsZW1lbnRzLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGVcbiAgICogbXVzdGFjaGUgc3ltYm9sIHRoYXQgd2FzIHVzZWQgaW5zaWRlIHRoZSB0YWcsIGUuZy4gXCIjXCIgb3IgXCImXCIuIElmIHRoZSB0YWdcbiAgICogZGlkIG5vdCBjb250YWluIGEgc3ltYm9sIChpLmUuIHt7bXlWYWx1ZX19KSB0aGlzIGVsZW1lbnQgaXMgXCJuYW1lXCIuIEZvclxuICAgKiBhbGwgdGV4dCB0aGF0IGFwcGVhcnMgb3V0c2lkZSBhIHN5bWJvbCB0aGlzIGVsZW1lbnQgaXMgXCJ0ZXh0XCIuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHRva2VuIGlzIGl0cyBcInZhbHVlXCIuIEZvciBtdXN0YWNoZSB0YWdzIHRoaXMgaXNcbiAgICogd2hhdGV2ZXIgZWxzZSB3YXMgaW5zaWRlIHRoZSB0YWcgYmVzaWRlcyB0aGUgb3BlbmluZyBzeW1ib2wuIEZvciB0ZXh0IHRva2Vuc1xuICAgKiB0aGlzIGlzIHRoZSB0ZXh0IGl0c2VsZi5cbiAgICpcbiAgICogVGhlIHRoaXJkIGFuZCBmb3VydGggZWxlbWVudHMgb2YgdGhlIHRva2VuIGFyZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzLFxuICAgKiByZXNwZWN0aXZlbHksIG9mIHRoZSB0b2tlbiBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRva2VucyB0aGF0IGFyZSB0aGUgcm9vdCBub2RlIG9mIGEgc3VidHJlZSBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhblxuICAgKiBhcnJheSBvZiB0b2tlbnMgaW4gdGhlIHN1YnRyZWUgYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgYXRcbiAgICogd2hpY2ggdGhlIGNsb3NpbmcgdGFnIGZvciB0aGF0IHNlY3Rpb24gYmVnaW5zLlxuICAgKlxuICAgKiBUb2tlbnMgZm9yIHBhcnRpYWxzIGFsc28gY29udGFpbiB0d28gbW9yZSBlbGVtZW50czogMSkgYSBzdHJpbmcgdmFsdWUgb2ZcbiAgICogaW5kZW5kYXRpb24gcHJpb3IgdG8gdGhhdCB0YWcgYW5kIDIpIHRoZSBpbmRleCBvZiB0aGF0IHRhZyBvbiB0aGF0IGxpbmUgLVxuICAgKiBlZyBhIHZhbHVlIG9mIDIgaW5kaWNhdGVzIHRoZSBwYXJ0aWFsIGlzIHRoZSB0aGlyZCB0YWcgb24gdGhpcyBsaW5lLlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICBpZiAoIXRlbXBsYXRlKVxuICAgICAgcmV0dXJuIFtdO1xuICAgIHZhciBsaW5lSGFzTm9uU3BhY2UgPSBmYWxzZTtcbiAgICB2YXIgc2VjdGlvbnMgPSBbXTsgICAgIC8vIFN0YWNrIHRvIGhvbGQgc2VjdGlvbiB0b2tlbnNcbiAgICB2YXIgdG9rZW5zID0gW107ICAgICAgIC8vIEJ1ZmZlciB0byBob2xkIHRoZSB0b2tlbnNcbiAgICB2YXIgc3BhY2VzID0gW107ICAgICAgIC8vIEluZGljZXMgb2Ygd2hpdGVzcGFjZSB0b2tlbnMgb24gdGhlIGN1cnJlbnQgbGluZVxuICAgIHZhciBoYXNUYWcgPSBmYWxzZTsgICAgLy8gSXMgdGhlcmUgYSB7e3RhZ319IG9uIHRoZSBjdXJyZW50IGxpbmU/XG4gICAgdmFyIG5vblNwYWNlID0gZmFsc2U7ICAvLyBJcyB0aGVyZSBhIG5vbi1zcGFjZSBjaGFyIG9uIHRoZSBjdXJyZW50IGxpbmU/XG4gICAgdmFyIGluZGVudGF0aW9uID0gJyc7ICAvLyBUcmFja3MgaW5kZW50YXRpb24gZm9yIHRhZ3MgdGhhdCB1c2UgaXRcbiAgICB2YXIgdGFnSW5kZXggPSAwOyAgICAgIC8vIFN0b3JlcyBhIGNvdW50IG9mIG51bWJlciBvZiB0YWdzIGVuY291bnRlcmVkIG9uIGEgbGluZVxuXG4gICAgLy8gU3RyaXBzIGFsbCB3aGl0ZXNwYWNlIHRva2VucyBhcnJheSBmb3IgdGhlIGN1cnJlbnQgbGluZVxuICAgIC8vIGlmIHRoZXJlIHdhcyBhIHt7I3RhZ319IG9uIGl0IGFuZCBvdGhlcndpc2Ugb25seSBzcGFjZS5cbiAgICBmdW5jdGlvbiBzdHJpcFNwYWNlICgpIHtcbiAgICAgIGlmIChoYXNUYWcgJiYgIW5vblNwYWNlKSB7XG4gICAgICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoKVxuICAgICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYWNlcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBoYXNUYWcgPSBmYWxzZTtcbiAgICAgIG5vblNwYWNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG9wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZTtcbiAgICBmdW5jdGlvbiBjb21waWxlVGFncyAodGFnc1RvQ29tcGlsZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJylcbiAgICAgICAgdGFnc1RvQ29tcGlsZSA9IHRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwgMik7XG5cbiAgICAgIGlmICghaXNBcnJheSh0YWdzVG9Db21waWxlKSB8fCB0YWdzVG9Db21waWxlLmxlbmd0aCAhPT0gMilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhZ3M6ICcgKyB0YWdzVG9Db21waWxlKTtcblxuICAgICAgb3BlbmluZ1RhZ1JlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkgKyAnXFxcXHMqJyk7XG4gICAgICBjbG9zaW5nVGFnUmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICAgIGNsb3NpbmdDdXJseVJlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCgnfScgKyB0YWdzVG9Db21waWxlWzFdKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRhZ3ModGFncyB8fCBtdXN0YWNoZS50YWdzKTtcblxuICAgIHZhciBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gICAgdmFyIHN0YXJ0LCB0eXBlLCB2YWx1ZSwgY2hyLCB0b2tlbiwgb3BlblNlY3Rpb247XG4gICAgd2hpbGUgKCFzY2FubmVyLmVvcygpKSB7XG4gICAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xuXG4gICAgICAvLyBNYXRjaCBhbnkgdGV4dCBiZXR3ZWVuIHRhZ3MuXG4gICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCB2YWx1ZUxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2hyID0gdmFsdWUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgICBzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKTtcbiAgICAgICAgICAgIGluZGVudGF0aW9uICs9IGNocjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgbGluZUhhc05vblNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZGVudGF0aW9uICs9ICcgJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b2tlbnMucHVzaChbICd0ZXh0JywgY2hyLCBzdGFydCwgc3RhcnQgKyAxIF0pO1xuICAgICAgICAgIHN0YXJ0ICs9IDE7XG5cbiAgICAgICAgICAvLyBDaGVjayBmb3Igd2hpdGVzcGFjZSBvbiB0aGUgY3VycmVudCBsaW5lLlxuICAgICAgICAgIGlmIChjaHIgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICBzdHJpcFNwYWNlKCk7XG4gICAgICAgICAgICBpbmRlbnRhdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGFnSW5kZXggPSAwO1xuICAgICAgICAgICAgbGluZUhhc05vblNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE1hdGNoIHRoZSBvcGVuaW5nIHRhZy5cbiAgICAgIGlmICghc2Nhbm5lci5zY2FuKG9wZW5pbmdUYWdSZSkpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBoYXNUYWcgPSB0cnVlO1xuXG4gICAgICAvLyBHZXQgdGhlIHRhZyB0eXBlLlxuICAgICAgdHlwZSA9IHNjYW5uZXIuc2Nhbih0YWdSZSkgfHwgJ25hbWUnO1xuICAgICAgc2Nhbm5lci5zY2FuKHdoaXRlUmUpO1xuXG4gICAgICAvLyBHZXQgdGhlIHRhZyB2YWx1ZS5cbiAgICAgIGlmICh0eXBlID09PSAnPScpIHtcbiAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChlcXVhbHNSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhbihlcXVhbHNSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd7Jykge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdDdXJseVJlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuKGN1cmx5UmUpO1xuICAgICAgICBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xuICAgICAgICB0eXBlID0gJyYnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYXRjaCB0aGUgY2xvc2luZyB0YWcuXG4gICAgICBpZiAoIXNjYW5uZXIuc2NhbihjbG9zaW5nVGFnUmUpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHRhZyBhdCAnICsgc2Nhbm5lci5wb3MpO1xuXG4gICAgICBpZiAodHlwZSA9PSAnPicpIHtcbiAgICAgICAgdG9rZW4gPSBbIHR5cGUsIHZhbHVlLCBzdGFydCwgc2Nhbm5lci5wb3MsIGluZGVudGF0aW9uLCB0YWdJbmRleCwgbGluZUhhc05vblNwYWNlIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbiA9IFsgdHlwZSwgdmFsdWUsIHN0YXJ0LCBzY2FubmVyLnBvcyBdO1xuICAgICAgfVxuICAgICAgdGFnSW5kZXgrKztcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICcjJyB8fCB0eXBlID09PSAnXicpIHtcbiAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcvJykge1xuICAgICAgICAvLyBDaGVjayBzZWN0aW9uIG5lc3RpbmcuXG4gICAgICAgIG9wZW5TZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG5cbiAgICAgICAgaWYgKCFvcGVuU2VjdGlvbilcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInICsgdmFsdWUgKyAnXCIgYXQgJyArIHN0YXJ0KTtcblxuICAgICAgICBpZiAob3BlblNlY3Rpb25bMV0gIT09IHZhbHVlKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc3RhcnQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmFtZScgfHwgdHlwZSA9PT0gJ3snIHx8IHR5cGUgPT09ICcmJykge1xuICAgICAgICBub25TcGFjZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICAvLyBTZXQgdGhlIHRhZ3MgZm9yIHRoZSBuZXh0IHRpbWUgYXJvdW5kLlxuICAgICAgICBjb21waWxlVGFncyh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RyaXBTcGFjZSgpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBubyBvcGVuIHNlY3Rpb25zIHdoZW4gd2UncmUgZG9uZS5cbiAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgaWYgKG9wZW5TZWN0aW9uKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICByZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZXMgdGhlIHZhbHVlcyBvZiBjb25zZWN1dGl2ZSB0ZXh0IHRva2VucyBpbiB0aGUgZ2l2ZW4gYHRva2Vuc2AgYXJyYXlcbiAgICogdG8gYSBzaW5nbGUgdG9rZW4uXG4gICAqL1xuICBmdW5jdGlvbiBzcXVhc2hUb2tlbnMgKHRva2Vucykge1xuICAgIHZhciBzcXVhc2hlZFRva2VucyA9IFtdO1xuXG4gICAgdmFyIHRva2VuLCBsYXN0VG9rZW47XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBpZiAodG9rZW5bMF0gPT09ICd0ZXh0JyAmJiBsYXN0VG9rZW4gJiYgbGFzdFRva2VuWzBdID09PSAndGV4dCcpIHtcbiAgICAgICAgICBsYXN0VG9rZW5bMV0gKz0gdG9rZW5bMV07XG4gICAgICAgICAgbGFzdFRva2VuWzNdID0gdG9rZW5bM107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3F1YXNoZWRUb2tlbnM7XG4gIH1cblxuICAvKipcbiAgICogRm9ybXMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIGludG8gYSBuZXN0ZWQgdHJlZSBzdHJ1Y3R1cmUgd2hlcmVcbiAgICogdG9rZW5zIHRoYXQgcmVwcmVzZW50IGEgc2VjdGlvbiBoYXZlIHR3byBhZGRpdGlvbmFsIGl0ZW1zOiAxKSBhbiBhcnJheSBvZlxuICAgKiBhbGwgdG9rZW5zIHRoYXQgYXBwZWFyIGluIHRoYXQgc2VjdGlvbiBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbFxuICAgKiB0ZW1wbGF0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGVuZCBvZiB0aGF0IHNlY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBuZXN0VG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgbmVzdGVkVG9rZW5zID0gW107XG4gICAgdmFyIGNvbGxlY3RvciA9IG5lc3RlZFRva2VucztcbiAgICB2YXIgc2VjdGlvbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgc2VjdGlvbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgY2FzZSAnXic6XG4gICAgICAgICAgY29sbGVjdG9yLnB1c2godG9rZW4pO1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGNvbGxlY3RvciA9IHRva2VuWzRdID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgIHNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcbiAgICAgICAgICBzZWN0aW9uWzVdID0gdG9rZW5bMl07XG4gICAgICAgICAgY29sbGVjdG9yID0gc2VjdGlvbnMubGVuZ3RoID4gMCA/IHNlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aCAtIDFdWzRdIDogbmVzdGVkVG9rZW5zO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmVzdGVkVG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgc2ltcGxlIHN0cmluZyBzY2FubmVyIHRoYXQgaXMgdXNlZCBieSB0aGUgdGVtcGxhdGUgcGFyc2VyIHRvIGZpbmRcbiAgICogdG9rZW5zIGluIHRlbXBsYXRlIHN0cmluZ3MuXG4gICAqL1xuICBmdW5jdGlvbiBTY2FubmVyIChzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRhaWwgPSBzdHJpbmc7XG4gICAgdGhpcy5wb3MgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB0YWlsIGlzIGVtcHR5IChlbmQgb2Ygc3RyaW5nKS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLmVvcyA9IGZ1bmN0aW9uIGVvcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFpbCA9PT0gJyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIG1hdGNoIHRoZSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24gYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqIFJldHVybnMgdGhlIG1hdGNoZWQgdGV4dCBpZiBpdCBjYW4gbWF0Y2gsIHRoZSBlbXB0eSBzdHJpbmcgb3RoZXJ3aXNlLlxuICAgKi9cbiAgU2Nhbm5lci5wcm90b3R5cGUuc2NhbiA9IGZ1bmN0aW9uIHNjYW4gKHJlKSB7XG4gICAgdmFyIG1hdGNoID0gdGhpcy50YWlsLm1hdGNoKHJlKTtcblxuICAgIGlmICghbWF0Y2ggfHwgbWF0Y2guaW5kZXggIT09IDApXG4gICAgICByZXR1cm4gJyc7XG5cbiAgICB2YXIgc3RyaW5nID0gbWF0Y2hbMF07XG5cbiAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpO1xuICAgIHRoaXMucG9zICs9IHN0cmluZy5sZW5ndGg7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTa2lwcyBhbGwgdGV4dCB1bnRpbCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGNhbiBiZSBtYXRjaGVkLiBSZXR1cm5zXG4gICAqIHRoZSBza2lwcGVkIHN0cmluZywgd2hpY2ggaXMgdGhlIGVudGlyZSB0YWlsIGlmIG5vIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgKi9cbiAgU2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsID0gZnVuY3Rpb24gc2NhblVudGlsIChyZSkge1xuICAgIHZhciBpbmRleCA9IHRoaXMudGFpbC5zZWFyY2gocmUpLCBtYXRjaDtcblxuICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIG1hdGNoID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIG1hdGNoID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWF0Y2ggPSB0aGlzLnRhaWwuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5wb3MgKz0gbWF0Y2gubGVuZ3RoO1xuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGNvbnRleHQgYnkgd3JhcHBpbmcgYSB2aWV3IG9iamVjdCBhbmRcbiAgICogbWFpbnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb250ZXh0LlxuICAgKi9cbiAgZnVuY3Rpb24gQ29udGV4dCAodmlldywgcGFyZW50Q29udGV4dCkge1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgdGhpcy5jYWNoZSA9IHsgJy4nOiB0aGlzLnZpZXcgfTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudENvbnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjb250ZXh0IHVzaW5nIHRoZSBnaXZlbiB2aWV3IHdpdGggdGhpcyBjb250ZXh0XG4gICAqIGFzIHRoZSBwYXJlbnQuXG4gICAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAodmlldykge1xuICAgIHJldHVybiBuZXcgQ29udGV4dCh2aWV3LCB0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIG5hbWUgaW4gdGhpcyBjb250ZXh0LCB0cmF2ZXJzaW5nXG4gICAqIHVwIHRoZSBjb250ZXh0IGhpZXJhcmNoeSBpZiB0aGUgdmFsdWUgaXMgYWJzZW50IGluIHRoaXMgY29udGV4dCdzIHZpZXcuXG4gICAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiBsb29rdXAgKG5hbWUpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuXG4gICAgdmFyIHZhbHVlO1xuICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgdmFsdWUgPSBjYWNoZVtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBpbnRlcm1lZGlhdGVWYWx1ZSwgbmFtZXMsIGluZGV4LCBsb29rdXBIaXQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgIGludGVybWVkaWF0ZVZhbHVlID0gY29udGV4dC52aWV3O1xuICAgICAgICAgIG5hbWVzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzaW5nIHRoZSBkb3Qgbm90aW9uIHBhdGggaW4gYG5hbWVgLCB3ZSBkZXNjZW5kIHRocm91Z2ggdGhlXG4gICAgICAgICAgICogbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUbyBiZSBjZXJ0YWluIHRoYXQgdGhlIGxvb2t1cCBoYXMgYmVlbiBzdWNjZXNzZnVsLCB3ZSBoYXZlIHRvXG4gICAgICAgICAgICogY2hlY2sgaWYgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBwYXRoIGFjdHVhbGx5IGhhcyB0aGUgcHJvcGVydHlcbiAgICAgICAgICAgKiB3ZSBhcmUgbG9va2luZyBmb3IuIFdlIHN0b3JlIHRoZSByZXN1bHQgaW4gYGxvb2t1cEhpdGAuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGlzIGlzIHNwZWNpYWxseSBuZWNlc3NhcnkgZm9yIHdoZW4gdGhlIHZhbHVlIGhhcyBiZWVuIHNldCB0b1xuICAgICAgICAgICAqIGB1bmRlZmluZWRgIGFuZCB3ZSB3YW50IHRvIGF2b2lkIGxvb2tpbmcgdXAgcGFyZW50IGNvbnRleHRzLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgZG90IG5vdGF0aW9uIGlzIHVzZWQsIHdlIGNvbnNpZGVyIHRoZSBsb29rdXBcbiAgICAgICAgICAgKiB0byBiZSBzdWNjZXNzZnVsIGV2ZW4gaWYgdGhlIGxhc3QgXCJvYmplY3RcIiBpbiB0aGUgcGF0aCBpc1xuICAgICAgICAgICAqIG5vdCBhY3R1YWxseSBhbiBvYmplY3QgYnV0IGEgcHJpbWl0aXZlIChlLmcuLCBhIHN0cmluZywgb3IgYW5cbiAgICAgICAgICAgKiBpbnRlZ2VyKSwgYmVjYXVzZSBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGFjY2VzcyBhIHByb3BlcnR5XG4gICAgICAgICAgICogb2YgYW4gYXV0b2JveGVkIHByaW1pdGl2ZSwgc3VjaCBhcyB0aGUgbGVuZ3RoIG9mIGEgc3RyaW5nLlxuICAgICAgICAgICAqKi9cbiAgICAgICAgICB3aGlsZSAoaW50ZXJtZWRpYXRlVmFsdWUgIT0gbnVsbCAmJiBpbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuYW1lcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICBsb29rdXBIaXQgPSAoXG4gICAgICAgICAgICAgICAgaGFzUHJvcGVydHkoaW50ZXJtZWRpYXRlVmFsdWUsIG5hbWVzW2luZGV4XSlcbiAgICAgICAgICAgICAgICB8fCBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eShpbnRlcm1lZGlhdGVWYWx1ZSwgbmFtZXNbaW5kZXhdKVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlW25hbWVzW2luZGV4KytdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWUgPSBjb250ZXh0LnZpZXdbbmFtZV07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPbmx5IGNoZWNraW5nIGFnYWluc3QgYGhhc1Byb3BlcnR5YCwgd2hpY2ggYWx3YXlzIHJldHVybnMgYGZhbHNlYCBpZlxuICAgICAgICAgICAqIGBjb250ZXh0LnZpZXdgIGlzIG5vdCBhbiBvYmplY3QuIERlbGliZXJhdGVseSBvbWl0dGluZyB0aGUgY2hlY2tcbiAgICAgICAgICAgKiBhZ2FpbnN0IGBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eWAgaWYgZG90IG5vdGF0aW9uIGlzIG5vdCB1c2VkLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQ29uc2lkZXIgdGhpcyBleGFtcGxlOlxuICAgICAgICAgICAqIGBgYFxuICAgICAgICAgICAqIE11c3RhY2hlLnJlbmRlcihcIlRoZSBsZW5ndGggb2YgYSBmb290YmFsbCBmaWVsZCBpcyB7eyNsZW5ndGh9fXt7bGVuZ3RofX17ey9sZW5ndGh9fS5cIiwge2xlbmd0aDogXCIxMDAgeWFyZHNcIn0pXG4gICAgICAgICAgICogYGBgXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBJZiB3ZSB3ZXJlIHRvIGNoZWNrIGFsc28gYWdhaW5zdCBgcHJpbWl0aXZlSGFzT3duUHJvcGVydHlgLCBhcyB3ZSBkb1xuICAgICAgICAgICAqIGluIHRoZSBkb3Qgbm90YXRpb24gY2FzZSwgdGhlbiByZW5kZXIgY2FsbCB3b3VsZCByZXR1cm46XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBcIlRoZSBsZW5ndGggb2YgYSBmb290YmFsbCBmaWVsZCBpcyA5LlwiXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiByYXRoZXIgdGhhbiB0aGUgZXhwZWN0ZWQ6XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBcIlRoZSBsZW5ndGggb2YgYSBmb290YmFsbCBmaWVsZCBpcyAxMDAgeWFyZHMuXCJcbiAgICAgICAgICAgKiovXG4gICAgICAgICAgbG9va3VwSGl0ID0gaGFzUHJvcGVydHkoY29udGV4dC52aWV3LCBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb29rdXBIaXQpIHtcbiAgICAgICAgICB2YWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICBjYWNoZVtuYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSlcbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbCh0aGlzLnZpZXcpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIFdyaXRlciBrbm93cyBob3cgdG8gdGFrZSBhIHN0cmVhbSBvZiB0b2tlbnMgYW5kIHJlbmRlciB0aGVtIHRvIGFcbiAgICogc3RyaW5nLCBnaXZlbiBhIGNvbnRleHQuIEl0IGFsc28gbWFpbnRhaW5zIGEgY2FjaGUgb2YgdGVtcGxhdGVzIHRvXG4gICAqIGF2b2lkIHRoZSBuZWVkIHRvIHBhcnNlIHRoZSBzYW1lIHRlbXBsYXRlIHR3aWNlLlxuICAgKi9cbiAgZnVuY3Rpb24gV3JpdGVyICgpIHtcbiAgICB0aGlzLnRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICBfY2FjaGU6IHt9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQgKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVba2V5XSA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0IChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2tleV07XG4gICAgICB9LFxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGlzIHdyaXRlci5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy50ZW1wbGF0ZUNhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW5kIGNhY2hlcyB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGB0YWdzYCBvclxuICAgKiBgbXVzdGFjaGUudGFnc2AgaWYgYHRhZ3NgIGlzIG9taXR0ZWQsICBhbmQgcmV0dXJucyB0aGUgYXJyYXkgb2YgdG9rZW5zXG4gICAqIHRoYXQgaXMgZ2VuZXJhdGVkIGZyb20gdGhlIHBhcnNlLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIHZhciBjYWNoZSA9IHRoaXMudGVtcGxhdGVDYWNoZTtcbiAgICB2YXIgY2FjaGVLZXkgPSB0ZW1wbGF0ZSArICc6JyArICh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpLmpvaW4oJzonKTtcbiAgICB2YXIgaXNDYWNoZUVuYWJsZWQgPSB0eXBlb2YgY2FjaGUgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciB0b2tlbnMgPSBpc0NhY2hlRW5hYmxlZCA/IGNhY2hlLmdldChjYWNoZUtleSkgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodG9rZW5zID09IHVuZGVmaW5lZCkge1xuICAgICAgdG9rZW5zID0gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgdGFncyk7XG4gICAgICBpc0NhY2hlRW5hYmxlZCAmJiBjYWNoZS5zZXQoY2FjaGVLZXksIHRva2Vucyk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZ2gtbGV2ZWwgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2l0aFxuICAgKiB0aGUgZ2l2ZW4gYHZpZXdgLlxuICAgKlxuICAgKiBUaGUgb3B0aW9uYWwgYHBhcnRpYWxzYCBhcmd1bWVudCBtYXkgYmUgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG4gICAqIG5hbWVzIGFuZCB0ZW1wbGF0ZXMgb2YgcGFydGlhbHMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUuIEl0IG1heVxuICAgKiBhbHNvIGJlIGEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGxvYWQgcGFydGlhbCB0ZW1wbGF0ZXMgb24gdGhlIGZseVxuICAgKiB0aGF0IHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGUgbmFtZSBvZiB0aGUgcGFydGlhbC5cbiAgICpcbiAgICogSWYgdGhlIG9wdGlvbmFsIGBjb25maWdgIGFyZ3VtZW50IGlzIGdpdmVuIGhlcmUsIHRoZW4gaXQgc2hvdWxkIGJlIGFuXG4gICAqIG9iamVjdCB3aXRoIGEgYHRhZ3NgIGF0dHJpYnV0ZSBvciBhbiBgZXNjYXBlYCBhdHRyaWJ1dGUgb3IgYm90aC5cbiAgICogSWYgYW4gYXJyYXkgaXMgcGFzc2VkLCB0aGVuIGl0IHdpbGwgYmUgaW50ZXJwcmV0ZWQgdGhlIHNhbWUgd2F5IGFzXG4gICAqIGEgYHRhZ3NgIGF0dHJpYnV0ZSBvbiBhIGBjb25maWdgIG9iamVjdC5cbiAgICpcbiAgICogVGhlIGB0YWdzYCBhdHRyaWJ1dGUgb2YgYSBgY29uZmlnYCBvYmplY3QgbXVzdCBiZSBhbiBhcnJheSB3aXRoIHR3b1xuICAgKiBzdHJpbmcgdmFsdWVzOiB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIHVzZWQgaW4gdGhlIHRlbXBsYXRlIChlLmcuXG4gICAqIFsgXCI8JVwiLCBcIiU+XCIgXSkuIFRoZSBkZWZhdWx0IGlzIHRvIG11c3RhY2hlLnRhZ3MuXG4gICAqXG4gICAqIFRoZSBgZXNjYXBlYCBhdHRyaWJ1dGUgb2YgYSBgY29uZmlnYCBvYmplY3QgbXVzdCBiZSBhIGZ1bmN0aW9uIHdoaWNoXG4gICAqIGFjY2VwdHMgYSBzdHJpbmcgYXMgaW5wdXQgYW5kIG91dHB1dHMgYSBzYWZlbHkgZXNjYXBlZCBzdHJpbmcuXG4gICAqIElmIGFuIGBlc2NhcGVgIGZ1bmN0aW9uIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBhbiBIVE1MLXNhZmUgc3RyaW5nXG4gICAqIGVzY2FwaW5nIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIGRlZmF1bHQuXG4gICAqL1xuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzLCBjb25maWcpIHtcbiAgICB2YXIgdGFncyA9IHRoaXMuZ2V0Q29uZmlnVGFncyhjb25maWcpO1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbiAgICB2YXIgY29udGV4dCA9ICh2aWV3IGluc3RhbmNlb2YgQ29udGV4dCkgPyB2aWV3IDogbmV3IENvbnRleHQodmlldywgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgdGVtcGxhdGUsIGNvbmZpZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvdy1sZXZlbCBtZXRob2QgdGhhdCByZW5kZXJzIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCB1c2luZ1xuICAgKiB0aGUgZ2l2ZW4gYGNvbnRleHRgIGFuZCBgcGFydGlhbHNgLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgYG9yaWdpbmFsVGVtcGxhdGVgIGlzIG9ubHkgZXZlciB1c2VkIHRvIGV4dHJhY3QgdGhlIHBvcnRpb25cbiAgICogb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgd2FzIGNvbnRhaW5lZCBpbiBhIGhpZ2hlci1vcmRlciBzZWN0aW9uLlxuICAgKiBJZiB0aGUgdGVtcGxhdGUgZG9lc24ndCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zLCB0aGlzIGFyZ3VtZW50IG1heVxuICAgKiBiZSBvbWl0dGVkLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnMgPSBmdW5jdGlvbiByZW5kZXJUb2tlbnMgKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZykge1xuICAgIHZhciBidWZmZXIgPSAnJztcblxuICAgIHZhciB0b2tlbiwgc3ltYm9sLCB2YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgc3ltYm9sID0gdG9rZW5bMF07XG5cbiAgICAgIGlmIChzeW1ib2wgPT09ICcjJykgdmFsdWUgPSB0aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnXicpIHZhbHVlID0gdGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICc+JykgdmFsdWUgPSB0aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBjb25maWcpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnJicpIHZhbHVlID0gdGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICduYW1lJykgdmFsdWUgPSB0aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCwgY29uZmlnKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJ3RleHQnKSB2YWx1ZSA9IHRoaXMucmF3VmFsdWUodG9rZW4pO1xuXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBidWZmZXI7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJTZWN0aW9uID0gZnVuY3Rpb24gcmVuZGVyU2VjdGlvbiAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGJ1ZmZlciA9ICcnO1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW5kZXIgYW4gYXJiaXRyYXJ5IHRlbXBsYXRlXG4gICAgLy8gaW4gdGhlIGN1cnJlbnQgY29udGV4dCBieSBoaWdoZXItb3JkZXIgc2VjdGlvbnMuXG4gICAgZnVuY3Rpb24gc3ViUmVuZGVyICh0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZvciAodmFyIGogPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaiA8IHZhbHVlTGVuZ3RoOyArK2opIHtcbiAgICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LnB1c2godmFsdWVbal0pLCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQucHVzaCh2YWx1ZSksIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSAhPT0gJ3N0cmluZycpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGUnKTtcblxuICAgICAgLy8gRXh0cmFjdCB0aGUgcG9ydGlvbiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB0aGUgc2VjdGlvbiBjb250YWlucy5cbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlckludmVydGVkID0gZnVuY3Rpb24gcmVuZGVySW52ZXJ0ZWQgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuXG4gICAgLy8gVXNlIEphdmFTY3JpcHQncyBkZWZpbml0aW9uIG9mIGZhbHN5LiBJbmNsdWRlIGVtcHR5IGFycmF5cy5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzE4NlxuICAgIGlmICghdmFsdWUgfHwgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUuaW5kZW50UGFydGlhbCA9IGZ1bmN0aW9uIGluZGVudFBhcnRpYWwgKHBhcnRpYWwsIGluZGVudGF0aW9uLCBsaW5lSGFzTm9uU3BhY2UpIHtcbiAgICB2YXIgZmlsdGVyZWRJbmRlbnRhdGlvbiA9IGluZGVudGF0aW9uLnJlcGxhY2UoL1teIFxcdF0vZywgJycpO1xuICAgIHZhciBwYXJ0aWFsQnlObCA9IHBhcnRpYWwuc3BsaXQoJ1xcbicpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydGlhbEJ5TmwubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXJ0aWFsQnlObFtpXS5sZW5ndGggJiYgKGkgPiAwIHx8ICFsaW5lSGFzTm9uU3BhY2UpKSB7XG4gICAgICAgIHBhcnRpYWxCeU5sW2ldID0gZmlsdGVyZWRJbmRlbnRhdGlvbiArIHBhcnRpYWxCeU5sW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFydGlhbEJ5Tmwuam9pbignXFxuJyk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsID0gZnVuY3Rpb24gcmVuZGVyUGFydGlhbCAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBjb25maWcpIHtcbiAgICBpZiAoIXBhcnRpYWxzKSByZXR1cm47XG4gICAgdmFyIHRhZ3MgPSB0aGlzLmdldENvbmZpZ1RhZ3MoY29uZmlnKTtcblxuICAgIHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24ocGFydGlhbHMpID8gcGFydGlhbHModG9rZW5bMV0pIDogcGFydGlhbHNbdG9rZW5bMV1dO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICB2YXIgbGluZUhhc05vblNwYWNlID0gdG9rZW5bNl07XG4gICAgICB2YXIgdGFnSW5kZXggPSB0b2tlbls1XTtcbiAgICAgIHZhciBpbmRlbnRhdGlvbiA9IHRva2VuWzRdO1xuICAgICAgdmFyIGluZGVudGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0YWdJbmRleCA9PSAwICYmIGluZGVudGF0aW9uKSB7XG4gICAgICAgIGluZGVudGVkVmFsdWUgPSB0aGlzLmluZGVudFBhcnRpYWwodmFsdWUsIGluZGVudGF0aW9uLCBsaW5lSGFzTm9uU3BhY2UpO1xuICAgICAgfVxuICAgICAgdmFyIHRva2VucyA9IHRoaXMucGFyc2UoaW5kZW50ZWRWYWx1ZSwgdGFncyk7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50ZWRWYWx1ZSwgY29uZmlnKTtcbiAgICB9XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS51bmVzY2FwZWRWYWx1ZSA9IGZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlICh0b2tlbiwgY29udGV4dCkge1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZSA9IGZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSAodG9rZW4sIGNvbnRleHQsIGNvbmZpZykge1xuICAgIHZhciBlc2NhcGUgPSB0aGlzLmdldENvbmZpZ0VzY2FwZShjb25maWcpIHx8IG11c3RhY2hlLmVzY2FwZTtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgZXNjYXBlID09PSBtdXN0YWNoZS5lc2NhcGUpID8gU3RyaW5nKHZhbHVlKSA6IGVzY2FwZSh2YWx1ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZSA9IGZ1bmN0aW9uIHJhd1ZhbHVlICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlblsxXTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLmdldENvbmZpZ1RhZ3MgPSBmdW5jdGlvbiBnZXRDb25maWdUYWdzIChjb25maWcpIHtcbiAgICBpZiAoaXNBcnJheShjb25maWcpKSB7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBjb25maWcudGFncztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLmdldENvbmZpZ0VzY2FwZSA9IGZ1bmN0aW9uIGdldENvbmZpZ0VzY2FwZSAoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiAhaXNBcnJheShjb25maWcpKSB7XG4gICAgICByZXR1cm4gY29uZmlnLmVzY2FwZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbXVzdGFjaGUgPSB7XG4gICAgbmFtZTogJ211c3RhY2hlLmpzJyxcbiAgICB2ZXJzaW9uOiAnNC4yLjAnLFxuICAgIHRhZ3M6IFsgJ3t7JywgJ319JyBdLFxuICAgIGNsZWFyQ2FjaGU6IHVuZGVmaW5lZCxcbiAgICBlc2NhcGU6IHVuZGVmaW5lZCxcbiAgICBwYXJzZTogdW5kZWZpbmVkLFxuICAgIHJlbmRlcjogdW5kZWZpbmVkLFxuICAgIFNjYW5uZXI6IHVuZGVmaW5lZCxcbiAgICBDb250ZXh0OiB1bmRlZmluZWQsXG4gICAgV3JpdGVyOiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogQWxsb3dzIGEgdXNlciB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBjYWNoaW5nIHN0cmF0ZWd5LCBieSBwcm92aWRpbmcgYW5cbiAgICAgKiBvYmplY3Qgd2l0aCBzZXQsIGdldCBhbmQgY2xlYXIgbWV0aG9kcy4gVGhpcyBjYW4gYWxzbyBiZSB1c2VkIHRvIGRpc2FibGVcbiAgICAgKiB0aGUgY2FjaGUgYnkgc2V0dGluZyBpdCB0byB0aGUgbGl0ZXJhbCBgdW5kZWZpbmVkYC5cbiAgICAgKi9cbiAgICBzZXQgdGVtcGxhdGVDYWNoZSAoY2FjaGUpIHtcbiAgICAgIGRlZmF1bHRXcml0ZXIudGVtcGxhdGVDYWNoZSA9IGNhY2hlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVmYXVsdCBvciBvdmVycmlkZGVuIGNhY2hpbmcgb2JqZWN0IGZyb20gdGhlIGRlZmF1bHQgd3JpdGVyLlxuICAgICAqL1xuICAgIGdldCB0ZW1wbGF0ZUNhY2hlICgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnRlbXBsYXRlQ2FjaGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIEFsbCBoaWdoLWxldmVsIG11c3RhY2hlLiogZnVuY3Rpb25zIHVzZSB0aGlzIHdyaXRlci5cbiAgdmFyIGRlZmF1bHRXcml0ZXIgPSBuZXcgV3JpdGVyKCk7XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGUgZGVmYXVsdCB3cml0ZXIuXG4gICAqL1xuICBtdXN0YWNoZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW5kIGNhY2hlcyB0aGUgZ2l2ZW4gdGVtcGxhdGUgaW4gdGhlIGRlZmF1bHQgd3JpdGVyIGFuZCByZXR1cm5zIHRoZVxuICAgKiBhcnJheSBvZiB0b2tlbnMgaXQgY29udGFpbnMuIERvaW5nIHRoaXMgYWhlYWQgb2YgdGltZSBhdm9pZHMgdGhlIG5lZWQgdG9cbiAgICogcGFyc2UgdGVtcGxhdGVzIG9uIHRoZSBmbHkgYXMgdGhleSBhcmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdXN0YWNoZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYHRlbXBsYXRlYCB3aXRoIHRoZSBnaXZlbiBgdmlld2AsIGBwYXJ0aWFsc2AsIGFuZCBgY29uZmlnYFxuICAgKiB1c2luZyB0aGUgZGVmYXVsdCB3cml0ZXIuXG4gICAqL1xuICBtdXN0YWNoZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKScpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMsIGNvbmZpZyk7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBlc2NhcGluZyBmdW5jdGlvbiBzbyB0aGF0IHRoZSB1c2VyIG1heSBvdmVycmlkZSBpdC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8yNDRcbiAgbXVzdGFjaGUuZXNjYXBlID0gZXNjYXBlSHRtbDtcblxuICAvLyBFeHBvcnQgdGhlc2UgbWFpbmx5IGZvciB0ZXN0aW5nLCBidXQgYWxzbyBmb3IgYWR2YW5jZWQgdXNhZ2UuXG4gIG11c3RhY2hlLlNjYW5uZXIgPSBTY2FubmVyO1xuICBtdXN0YWNoZS5Db250ZXh0ID0gQ29udGV4dDtcbiAgbXVzdGFjaGUuV3JpdGVyID0gV3JpdGVyO1xuXG4gIHJldHVybiBtdXN0YWNoZTtcblxufSkpKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nb21va3UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nb21va3UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IE11c3RhY2hlID0gcmVxdWlyZSgnbXVzdGFjaGUnKTtcbmltcG9ydCB0ZW1wbGF0ZXMgZnJvbSAnLi9nb21va3VUZW1wbGF0ZXMuanMnO1xuaW1wb3J0IGFzc2V0cyBmcm9tICcuL2dvbW9rdUFzc2V0cy5qcyc7XG5pbXBvcnQgJy4uL2Nzcy9nb21va3UuY3NzJztcblxuLyogYm9hcmQgbW9kdWxlICovXG5jb25zdCBib2FyZCA9ICgoKSA9PiB7XG5cbiAgICBsZXQgYm9hcmRTaXplLCBib2FyZCwgZnJvbnRMYXllciwgbWlkTGF5ZXIsIGJhY2tMYXllciwgYmFja2dyb3VuZCA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCB3cmFwcGVyID0gY3JlYXRlQm9hcmRXcmFwcGVyKCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZFdyYXBwZXIoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZ29tb2t1Qm9hcmRXcmFwcGVyJyk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdnb21va3VCb2FyZEJhY2tncm91bmQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3QmFja0xheWVyKHNpemUpIHtcbiAgICAgICAgYmFja0xheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhY2tMYXllci5jbGFzc0xpc3QuYWRkKCdnb21va3VCb2FyZEJhY2tMYXllcicpO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplICogMjsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemUgKiAyOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sID4gMCAmJiBjb2wgPCBzaXplICogMiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHJvdyA+IDAgJiYgcm93IDwgKHNpemUgLSAxKSAqIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgJSAyID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ2JvcmRlckJvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyb3cgPiAwICYmIHJvdyA8IHNpemUgKiAyIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoY29sID4gMCAmJiBjb2wgPCAoc2l6ZSAtIDEpICogMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCAlIDIgPT09IDApICBncmlkLmNsYXNzTGlzdC5hZGQoJ2JvcmRlclJpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmFja0xheWVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhd01pZExheWVyKCkge1xuICAgICAgICBtaWRMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtaWRMYXllci5jbGFzc0xpc3QuYWRkKCdnb21va3VCb2FyZE1pZExheWVyJyk7XG4gICAgICAgIGNvbnN0IGRvdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG90MS5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgZG90MS5jbGFzc0xpc3QuYWRkKCdkb3QxJyk7XG4gICAgICAgIGNvbnN0IGRvdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG90Mi5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgZG90Mi5jbGFzc0xpc3QuYWRkKCdkb3QyJyk7XG4gICAgICAgIGNvbnN0IGRvdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG90My5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgZG90My5jbGFzc0xpc3QuYWRkKCdkb3QzJyk7XG4gICAgICAgIGNvbnN0IGRvdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG90NC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgZG90NC5jbGFzc0xpc3QuYWRkKCdkb3Q0Jyk7XG4gICAgICAgIGNvbnN0IGRvdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG90NS5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgZG90NS5jbGFzc0xpc3QuYWRkKCdkb3Q1Jyk7XG4gICAgICAgIG1pZExheWVyLmFwcGVuZENoaWxkKGRvdDEpO1xuICAgICAgICBtaWRMYXllci5hcHBlbmRDaGlsZChkb3QyKTtcbiAgICAgICAgbWlkTGF5ZXIuYXBwZW5kQ2hpbGQoZG90Myk7XG4gICAgICAgIG1pZExheWVyLmFwcGVuZENoaWxkKGRvdDQpO1xuICAgICAgICBtaWRMYXllci5hcHBlbmRDaGlsZChkb3Q1KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3RnJvbnRMYXllcihzaXplKSB7XG4gICAgICAgIGZyb250TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJvbnRMYXllci5jbGFzc0xpc3QuYWRkKCdnb21va3VCb2FyZEZyb250TGF5ZXInKTtcbiAgICAgICAgZnJvbnRMYXllci5jbGFzc0xpc3QuYWRkKCdzaG93TnVtYmVyJyk7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgICAgICBncmlkLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgICAgIGdyaWQuZGF0YXNldC5jb2wgPSBjb2w7XG4gICAgICAgICAgICAgICAgZnJvbnRMYXllci5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbml0UGhhbnRvbVBpZWNlKCk7XG4gICAgICAgIGluaXRSZWFsUGllY2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVOdW1iZXIoKSB7XG4gICAgICAgIGZyb250TGF5ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd051bWJlcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQaGFudG9tUGllY2UoKSB7XG4gICAgICAgIGZyb250TGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKS5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHBsYXllcnMuZ2V0Q3VycmVudFBsYXllcigpLnBsYWNlUGhhbnRvbVBpZWNlKGdyaWQpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHBsYXllcnMuZ2V0Q3VycmVudFBsYXllcigpLnJlbW92ZVBoYW50b21QaWVjZShncmlkKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFJlYWxQaWVjZSgpIHtcbiAgICAgICAgZnJvbnRMYXllci5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHBsYXllcnMuZ2V0Q3VycmVudFBsYXllcigpLnBsYWNlUmVhbFBpZWNlKGdyaWQpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3KHNpemUpIHtcbiAgICAgICAgYm9hcmRTaXplID0gc2l6ZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1nb21va3Utc2l6ZScsIHNpemUpO1xuICAgICAgICBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdnb21va3VCb2FyZCcpO1xuICAgICAgICBkcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICAgICAgZHJhd0JhY2tMYXllcihzaXplKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYmFja0xheWVyKTtcbiAgICAgICAgZHJhd01pZExheWVyKHNpemUpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChtaWRMYXllcik7XG4gICAgICAgIGRyYXdGcm9udExheWVyKHNpemUpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChmcm9udExheWVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0Qm9hcmQoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdyaWRJc0VtcHR5KGdyaWQpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGdyaWQucXVlcnlTZWxlY3RvcignLnBpZWNlOm5vdCgucGhhbnRvbSknKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ3JpZEhhc1BoYW50b21QaWVjZShncmlkKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS5waGFudG9tJyk7XG4gICAgICAgIGlmIChjb250ZW50KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEdyaWQocm93LCBjb2wpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZnJvbnRMYXllci5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpLmZvckVhY2goZ3JpZCA9PiB7IFxuICAgICAgICAgICAgaWYgKChncmlkLmRhdGFzZXQucm93ID09IHJvdykgJiYgKGdyaWQuZGF0YXNldC5jb2wgPT0gY29sKSkgcmVzdWx0ID0gZ3JpZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZHJhdywgaW5zZXJ0Qm9hcmQsIHRvZ2dsZU51bWJlciwgZ2V0Qm9hcmQsIGdyaWRJc0VtcHR5LCBncmlkSGFzUGhhbnRvbVBpZWNlLCBnZXRHcmlkIH07XG5cbn0pKCk7XG5cbi8qIHBsYXllciBmYWN0b3J5IGZ1bmN0aW9uIFxuICogcGllY2UgaXMgdGhlIHBhdGggdG8gdGhlIHBpZWNlIGltYWdlICovXG5jb25zdCBwbGF5ZXIgPSBmdW5jdGlvbihpbk5hbWUsIGluQ29sb3IsIGluQXVkaW8pIHtcbiAgICBjb25zdCBuYW1lID0gaW5OYW1lO1xuICAgIGNvbnN0IHBpZWNlQ29sb3IgPSBpbkNvbG9yOyAgXG4gICAgY29uc3QgcGllY2VBdWRpbyA9IGluQXVkaW87XG5cbiAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQaWVjZSgpIHtcbiAgICAgICAgY29uc3QgbmV3UGllY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UGllY2UuY2xhc3NMaXN0LmFkZCgncGllY2UnKTtcbiAgICAgICAgbmV3UGllY2UuY2xhc3NMaXN0LmFkZChwaWVjZUNvbG9yKTtcbiAgICAgICAgcmV0dXJuIG5ld1BpZWNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlYWxQaWVjZSgpIHtcbiAgICAgICAgY29uc3QgbmV3UGllY2UgPSBjcmVhdGVQaWVjZS5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gbmV3UGllY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGhhbnRvbVBpZWNlKCkge1xuICAgICAgICBjb25zdCBuZXdQaWVjZSA9IGNyZWF0ZVBpZWNlLmNhbGwodGhpcyk7XG4gICAgICAgIG5ld1BpZWNlLmNsYXNzTGlzdC5hZGQoJ3BoYW50b20nKTtcbiAgICAgICAgcmV0dXJuIG5ld1BpZWNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlUGhhbnRvbVBpZWNlKGdyaWQpIHtcbiAgICAgICAgaWYgKCFnYW1lLmhhc1dpbm5lcigpICYmIGJvYXJkLmdyaWRJc0VtcHR5KGdyaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQaWVjZSA9IGNyZWF0ZVBoYW50b21QaWVjZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChuZXdQaWVjZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQaGFudG9tUGllY2UoZ3JpZCkge1xuICAgICAgICBjb25zdCBwaWVjZSA9IGdyaWQucXVlcnlTZWxlY3RvcignLnBoYW50b20nKTtcbiAgICAgICAgaWYgKHBpZWNlKSBncmlkLnJlbW92ZUNoaWxkKHBpZWNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVJlYWxQaWVjZShncmlkKSB7XG4gICAgICAgIGlmICghZ2FtZS5oYXNXaW5uZXIoKSAmJiBib2FyZC5ncmlkSXNFbXB0eShncmlkKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3UGllY2UgPSBjcmVhdGVSZWFsUGllY2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJlbW92ZVBoYW50b21QaWVjZS5jYWxsKHRoaXMsIGdyaWQpO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChuZXdQaWVjZSk7XG4gICAgICAgICAgICBhZGRJbnRvUGllY2VNYXAuY2FsbCh0aGlzLCBncmlkKTtcbiAgICAgICAgICAgIGdhbWUuY2FjaGVQaWVjZXMoZ3JpZCwgbmV3UGllY2UpO1xuICAgICAgICAgICAgcGxheVBpZWNlQXVkaW8oKTtcbiAgICAgICAgICAgIGlmIChjaGVja1dpbi5jYWxsKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5hbm5vdW5jZVdpbm5lcih0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllcnMuYWx0ZXJuYXRlUGxheWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5UGllY2VBdWRpbygpIHtcbiAgICAgICAgcGllY2VBdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHBpZWNlQXVkaW8ucGxheSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVJlYWxQaWVjZShncmlkKSB7XG4gICAgICAgIGNvbnN0IHBpZWNlID0gZ3JpZC5xdWVyeVNlbGVjdG9yKCcucGllY2UnKTtcbiAgICAgICAgaWYgKHBpZWNlKSBncmlkLnJlbW92ZUNoaWxkKHBpZWNlKTtcbiAgICAgICAgcmVtb3ZlRnJvbVBpZWNlTWFwLmNhbGwodGhpcywgZ3JpZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBpZWNlTWFwKHNpemUpIHtcbiAgICAgICAgdGhpcy5waWVjZU1hcCA9IFtdO1xuICAgICAgICB0aGlzLnBpZWNlTWFwU2l6ZSA9IHNpemU7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICB0aGlzLnBpZWNlTWFwLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3Jvd10ucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEludG9QaWVjZU1hcChncmlkKSB7XG4gICAgICAgIHRoaXMucGllY2VNYXBbZ3JpZC5kYXRhc2V0LnJvd11bZ3JpZC5kYXRhc2V0LmNvbF0gPSAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21QaWVjZU1hcChncmlkKSB7XG4gICAgICAgIHRoaXMucGllY2VNYXBbZ3JpZC5kYXRhc2V0LnJvd11bZ3JpZC5kYXRhc2V0LmNvbF0gPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrV2luKCkge1xuICAgICAgICBjb25zdCByb3dDb3VudCA9IFtdO1xuICAgICAgICBjb25zdCBjb2xDb3VudCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGllY2VNYXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgIHJvd0NvdW50LnB1c2goMCk7XG4gICAgICAgICAgICBjb2xDb3VudC5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWdvbmFsQ291bnQgPSBbXTtcbiAgICAgICAgY29uc3QgYW50aURpYWdvbmFsQ291bnQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBpZWNlTWFwU2l6ZSAqIDIgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGRpYWdvbmFsQ291bnQucHVzaCgwKTtcbiAgICAgICAgICAgIGFudGlEaWFnb25hbENvdW50LnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5waWVjZU1hcFNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnBpZWNlTWFwU2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFnb25hbElkeCA9IHJvdyAtIGNvbCArIHRoaXMucGllY2VNYXBTaXplIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBhbnRpRGlhZ29uYWxJZHggPSByb3cgKyBjb2w7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbcm93XVtjb2xdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd0NvdW50W3Jvd10rKztcbiAgICAgICAgICAgICAgICAgICAgY29sQ291bnRbY29sXSsrO1xuICAgICAgICAgICAgICAgICAgICBkaWFnb25hbENvdW50W2RpYWdvbmFsSWR4XSsrO1xuICAgICAgICAgICAgICAgICAgICBhbnRpRGlhZ29uYWxDb3VudFthbnRpRGlhZ29uYWxJZHhdKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dDb3VudFtyb3ddID09PSA1IHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sQ291bnRbY29sXSA9PT0gNSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsQ291bnRbZGlhZ29uYWxJZHhdID09PSA1IHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgYW50aURpYWdvbmFsQ291bnRbYW50aURpYWdvbmFsSWR4XSA9PT0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3dDb3VudFtyb3ddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29sQ291bnRbY29sXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsQ291bnRbZGlhZ29uYWxJZHhdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYW50aURpYWdvbmFsQ291bnRbYW50aURpYWdvbmFsSWR4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXROYW1lLCBwbGFjZVBoYW50b21QaWVjZSwgcmVtb3ZlUGhhbnRvbVBpZWNlLCBwbGFjZVJlYWxQaWVjZSwgcmVtb3ZlUmVhbFBpZWNlLCBpbml0UGllY2VNYXAsIGNoZWNrV2luIH07XG59O1xuXG5jb25zdCBwbGF5ZXJzID0gKCgpID0+IHtcbiAgICBjb25zdCBibGFja1BpZWNlQ29sb3IgPSAnYmxhY2snO1xuICAgIGNvbnN0IHdoaXRlUGllY2VDb2xvciA9ICd3aGl0ZSc7XG4gICAgY29uc3QgYmxhY2tQaWVjZUF1ZGlvID0gYXNzZXRzLmJsYWNrUGllY2VBdWRpbygpO1xuICAgIGNvbnN0IHdoaXRlUGllY2VBdWRpbyA9IGFzc2V0cy53aGl0ZVBpZWNlQXVkaW8oKTtcblxuICAgIGNvbnN0IHBsYXllcnMgPSBbcGxheWVyKCdCbGFjaycsIGJsYWNrUGllY2VDb2xvciwgYmxhY2tQaWVjZUF1ZGlvKSwgcGxheWVyKCdXaGl0ZScsIHdoaXRlUGllY2VDb2xvciwgd2hpdGVQaWVjZUF1ZGlvKV07IFxuICAgIGxldCBjdXJyZW50UGxheWVyID0gMDtcblxuICAgIGZ1bmN0aW9uIGFsdGVybmF0ZVBsYXllcigpIHtcbiAgICAgICAgY3VycmVudFBsYXllciA9IChjdXJyZW50UGxheWVyICsgMSkgJSAyO1xuICAgICAgICBpZiAoY29udHJvbGxlcnMuaGFzQ29udHJvbGxlcigncGxheWVyJykpIGNvbnRyb2xsZXJzLnRvZ2dsZVBsYXllckNvbnRyb2xsZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyKCkge1xuICAgICAgICByZXR1cm4gcGxheWVyc1tjdXJyZW50UGxheWVyXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UGllY2VNYXAoc2l6ZSkge1xuICAgICAgICBwbGF5ZXJzLmZvckVhY2godGFyZ2V0ID0+IHRhcmdldC5pbml0UGllY2VNYXAoc2l6ZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoc2l6ZSkge1xuICAgICAgICBpbml0UGllY2VNYXAoc2l6ZSk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAwOyAvLyBhbHdheXMgYmxhY2sgcGxheXMgZmlyc3RcbiAgICB9XG5cbiAgICByZXR1cm4geyBhbHRlcm5hdGVQbGF5ZXIsIGdldEN1cnJlbnRQbGF5ZXIsIGluaXQgfTtcbn0pKCk7XG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHBpZWNlcyA9IHVuZGVmaW5lZDsgLy8gY2FjaGUgYWxsIHBsYWNlZCBwaWVjZXMgYnkgdHdvIHBsYXllcnNcbiAgICBsZXQgcGllY2VzSWQgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHdpbm5lciA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCB2aWN0b3J5QXVkaW9zID0gYXNzZXRzLnZpY3RvcnlBdWRpb3MoKTtcblxuICAgIGZ1bmN0aW9uIGluaXRQaWVjZXNDYWNoZSgpIHtcbiAgICAgICAgcGllY2VzID0gW107XG4gICAgICAgIHBpZWNlc0lkID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0SWQoKSB7XG4gICAgICAgIHJldHVybiArK3BpZWNlc0lkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZ2hsaWdodFBpZWNlKHBpZWNlKSB7XG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwaWVjZXNbcGllY2VzLmxlbmd0aCAtIDFdLm9iai5jbGFzc0xpc3QucmVtb3ZlKCdsYXN0UGllY2UnKTtcbiAgICAgICAgfVxuICAgICAgICBwaWVjZS5jbGFzc0xpc3QuYWRkKCdsYXN0UGllY2UnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWNoZVBpZWNlcyhncmlkLCBwaWVjZSkge1xuICAgICAgICBoaWdobGlnaHRQaWVjZShwaWVjZSk7XG4gICAgICAgIHBpZWNlcy5wdXNoKHtpZDogbmV4dElkKCksIHJvdzogZ3JpZC5kYXRhc2V0LnJvdywgY29sOiBncmlkLmRhdGFzZXQuY29sLCBvYmo6IHBpZWNlfSk7XG4gICAgICAgIHBpZWNlLnRleHRDb250ZW50ID0gcGllY2VzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByb2xsQmFjaygpIHtcbiAgICAgICAgY29uc3QgbGFzdFBpZWNlID0gcGllY2VzLnBvcCgpO1xuICAgICAgICBpZiAobGFzdFBpZWNlKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gYm9hcmQuZ2V0R3JpZChsYXN0UGllY2Uucm93LCBsYXN0UGllY2UuY29sKTtcbiAgICAgICAgICAgIHBsYXllcnMuYWx0ZXJuYXRlUGxheWVyKCk7XG4gICAgICAgICAgICBwbGF5ZXJzLmdldEN1cnJlbnRQbGF5ZXIoKS5yZW1vdmVSZWFsUGllY2UoZ3JpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc1dpbm5lci5jYWxsKHRoaXMpKSByZW1vdmVXaW5uZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHBpZWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBoaWdobGlnaHRQaWVjZShwaWVjZXNbcGllY2VzLmxlbmd0aCAtIDFdLm9iaik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiB0byBzYXZlIHJlc291cmNlIHdlIGRvbid0IHJlc2V0IHRoZSBnYW1lLCBqdXN0IHJvbGwgYmFjayB0byB0aGUgcm91bmQgMSAqL1xuICAgIGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIHdoaWxlIChwaWVjZXMubGVuZ3RoID4gMCkgcm9sbEJhY2soKTtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB1c2VyIHBsdWdpbiBmaXJzdC4gSWYgbm90IGFueSwgdXNlIGxvY2FsIGRlZmF1bHQgYW5ub3VuY2Ugd2lubmVyIGNvbnRyb2xsZXIuICovXG4gICAgZnVuY3Rpb24gYW5ub3VuY2VXaW5uZXIoZ2FtZVdpbm5lcikge1xuICAgICAgICB3aW5uZXIgPSBnYW1lV2lubmVyO1xuICAgICAgICBjb25zdCBjb25ncmF0dWxhdGlvbiA9IGAke3dpbm5lci5nZXROYW1lKCl9IHdpbi4gQ29uZ3JhdHVsYXRpb24hYDtcbiAgICAgICAgaWYgKHBsdWdpbnMuaGFzUGx1Z2luKCdhbm5vdW5jZVdpbm5lcicpKSB7XG4gICAgICAgICAgICBwbHVnaW5zLmdldFBsdWdpbignYW5ub3VuY2VXaW5uZXInKShjb25ncmF0dWxhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWZhdWx0QW5ub3VuY2VXaW5uZXIoY29uZ3JhdHVsYXRpb24pOyAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0QW5ub3VuY2VXaW5uZXIoY29uZ3JhdHVsYXRpb24pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbnRyb2xsZXJzLmdldEFubm91bmNlV2lubmVyQ29udHJvbGxlcigpO1xuICAgICAgICBjb25zdCBwID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gY29uZ3JhdHVsYXRpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIHBsYXlWaWNvdHJ5QXVkaW8oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5Vmljb3RyeUF1ZGlvKCkge1xuICAgICAgICB2aWN0b3J5QXVkaW9zLmZvckVhY2goYXVkaW8gPT4gYXVkaW8uY3VycmVudFRpbWUgPSAwKTtcbiAgICAgICAgY29uc3QgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgICAgICB2aWN0b3J5QXVkaW9zW3JdLnBsYXkoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNXaW5uZXIoKSB7XG4gICAgICAgIGlmICh3aW5uZXIpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlV2lubmVyKCkge1xuICAgICAgICB3aW5uZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyogaW5pdGlhbGl6ZSBhIGdhbWUgKi9cbiAgICBmdW5jdGlvbiBpbml0KHNpemUpIHtcbiAgICAgICAgYm9hcmQuZHJhdyhzaXplKTtcbiAgICAgICAgcGxheWVycy5pbml0KHNpemUpO1xuICAgICAgICBpbml0UGllY2VzQ2FjaGUoKTtcbiAgICAgICAgaWYod2lubmVyKSB3aW5uZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChjb250cm9sbGVycy5oYXNDb250cm9sbGVyKCdwbGF5ZXInKSkgY29udHJvbGxlcnMucmVzZXRQbGF5ZXJDb250cm9sbGVyKCk7XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIHRoZSBvbGQgYm9hcmQsIGFuZCBpbnNlcnQgYSBuZXcgYm9hcmQgb2YgYW5vdGhlciBzaXplLCBhbmQgc3RhcnQgYSBuZXcgZ2FtZS4gKi9cbiAgICBmdW5jdGlvbiByZXNldChzaXplKSB7XG4gICAgICAgIGJvYXJkLmdldEJvYXJkKCkucmVtb3ZlKCk7XG4gICAgICAgIGluaXQoc2l6ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY2FjaGVQaWVjZXMsIHJvbGxCYWNrLCByZXN0YXJ0LCBhbm5vdW5jZVdpbm5lciwgaGFzV2lubmVyLCByZW1vdmVXaW5uZXIsIGluaXQsIHJlc2V0IH07XG59KSgpO1xuXG4vKiBBbGxvdyB1c2VyIHRvIHJlZ2lzdGVyIHBlcnNvbmFsIGN1c3RvbWl6ZWQgcGx1Z2lucyAqL1xuY29uc3QgcGx1Z2lucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2lucyA9IHt9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIG9iaikge1xuICAgICAgICBwbHVnaW5zW2Ake25hbWV9YF0gPSBvYmo7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzUGx1Z2luKG5hbWUpIHtcbiAgICAgICAgaWYocGx1Z2luc1tgJHtuYW1lfWBdKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBsdWdpbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5zW2Ake25hbWV9YF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVnaXN0ZXIsIGhhc1BsdWdpbiwgZ2V0UGx1Z2luIH07XG59KSgpO1xuXG5jb25zdCBjb250cm9sbGVycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgYmFuayA9IHt9OyAvLyBsYXp5IGluaXRpYWxpemF0aW9uXG4gICAgY29uc3QgY2xpY2tBdWRpbyA9IGFzc2V0cy5jbGlja0F1ZGlvKCk7XG5cbiAgICBmdW5jdGlvbiBwbGF5Q2xpY2tBdWRpbygpIHtcbiAgICAgICAgY2xpY2tBdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGNsaWNrQXVkaW8ucGxheSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0NvbnRyb2xsZXIobmFtZSkge1xuICAgICAgICBpZiAoYmFua1tgJHtuYW1lfWBdKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhcmdlQnRuKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZXMubGFyZ2VCdG4oKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgZGF0YSk7XG4gICAgICAgIGNvbnN0IGR1bW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1bW15Q29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiBkdW1teUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ29tb2t1QnRuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGxheWVyQ29udHJvbGxlcigpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZXMucGxheWVyKCk7XG4gICAgICAgIGNvbnN0IGR1bW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1bW15Q29udGFpbmVyLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZHVtbXlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmdvbW9rdVBsYXllcicpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQbGF5ZXJDb250cm9sbGVyKCkge1xuICAgICAgICBpZiAoIWJhbmtbJ3BsYXllciddKSBiYW5rWydwbGF5ZXInXSA9IGNyZWF0ZVBsYXllckNvbnRyb2xsZXIoKTtcbiAgICAgICAgcmV0dXJuIGJhbmtbJ3BsYXllciddOyBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVQbGF5ZXJDb250cm9sbGVyKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSBnZXRQbGF5ZXJDb250cm9sbGVyKCk7XG4gICAgICAgIHBsYXllci5xdWVyeVNlbGVjdG9yKCcuYmxhY2snKS5jbGFzc0xpc3QudG9nZ2xlKCdjdXJyZW50Jyk7XG4gICAgICAgIHBsYXllci5xdWVyeVNlbGVjdG9yKCcud2hpdGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdjdXJyZW50Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRQbGF5ZXJDb250cm9sbGVyKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSBnZXRQbGF5ZXJDb250cm9sbGVyKCk7XG4gICAgICAgIGNvbnN0IGJsYWNrID0gcGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ibGFjaycpO1xuICAgICAgICBjb25zdCB3aGl0ZSA9IHBsYXllci5xdWVyeVNlbGVjdG9yKCcud2hpdGUnKTtcbiAgICAgICAgaWYgKHdoaXRlLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudCcpKSB7XG4gICAgICAgICAgICBibGFjay5jbGFzc0xpc3QudG9nZ2xlKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICB3aGl0ZS5jbGFzc0xpc3QudG9nZ2xlKCdjdXJyZW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSb2xsQmFja0NvbnRyb2xsZXIoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGljb246ICdyZXBseScsIHRleHQ6ICdCYWNrJyB9O1xuICAgICAgICBjb25zdCBidG4gPSBjcmVhdGVMYXJnZUJ0bihkYXRhKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2dvbW9rdVJvbGxCYWNrQnRuJyk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXlDbGlja0F1ZGlvKCk7XG4gICAgICAgICAgICBnYW1lLnJvbGxCYWNrKClcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gYnRuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJvbGxCYWNrQ29udHJvbGxlcigpIHtcbiAgICAgICAgaWYgKCFiYW5rWydyb2xsQmFjayddKSBiYW5rWydyb2xsQmFjayddID0gY3JlYXRlUm9sbEJhY2tDb250cm9sbGVyKCk7XG4gICAgICAgIHJldHVybiBiYW5rWydyb2xsQmFjayddO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlc3RhcnRDb250cm9sbGVyKCkge1xuICAgICAgICBjb25zdCBkYXRhID0geyBpY29uOiAncmVmcmVzaCcsIHRleHQ6ICdSZXN0YXJ0JyB9O1xuICAgICAgICBjb25zdCBidG4gPSBjcmVhdGVMYXJnZUJ0bihkYXRhKTsgXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdnb21va3VSZXN0YXJ0QnRuJyk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXlDbGlja0F1ZGlvKCk7XG4gICAgICAgICAgICBnYW1lLnJlc3RhcnQoKVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVzdGFydENvbnRyb2xsZXIoKSB7XG4gICAgICAgIGlmICghYmFua1sncmVzdGFydCddKSBiYW5rWydyZXN0YXJ0J10gPSBjcmVhdGVSZXN0YXJ0Q29udHJvbGxlcigpO1xuICAgICAgICByZXR1cm4gYmFua1sncmVzdGFydCddO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZ2dsZU51bWJlckNvbnRyb2xsZXIoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGljb246ICdwYW5vcmFtYV9maXNoX2V5ZScsIHRleHQ6ICdOdW1iZXIgT2ZmJyB9O1xuICAgICAgICBjb25zdCBidG4gPSBjcmVhdGVMYXJnZUJ0bihkYXRhKTsgXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdnb21va3VUb2dnbGVOdW1iZXJCdG4nKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgICAgICAgIHBsYXlDbGlja0F1ZGlvKCk7XG4gICAgICAgICAgICBib2FyZC50b2dnbGVOdW1iZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBidG4ucXVlcnlTZWxlY3RvcignLnRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBidG4ucXVlcnlTZWxlY3RvcignLmljb24nKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LnRleHRDb250ZW50ID09PSAnTnVtYmVyIE9mZicpIHtcbiAgICAgICAgICAgICAgICBpY29uLnRleHRDb250ZW50ID0gJ2JsdXJfY2lyY3VsYXInO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSAnU2hvdyBOdW1iZXInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpY29uLnRleHRDb250ZW50ID0gJ3Bhbm9yYW1hX2Zpc2hfZXllJztcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gJ051bWJlciBPZmYnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2dnbGVOdW1iZXJDb250cm9sbGVyKCkge1xuICAgICAgICBpZiAoIWJhbmtbJ3RvZ2dsZU51bWJlciddKSBiYW5rWyd0b2dnbGVOdW1iZXInXSA9IGNyZWF0ZVRvZ2dsZU51bWJlckNvbnRyb2xsZXIoKTtcbiAgICAgICAgcmV0dXJuIGJhbmtbJ3RvZ2dsZU51bWJlciddO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlc2l6ZUNvbnRyb2xsZXIoc2l6ZSkge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2dvbW9rdUJ0bicpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNtJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGBnb21va3VSZXNpemUke3NpemV9YCk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGAke3NpemV9IMOXICR7c2l6ZX1gO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwbGF5Q2xpY2tBdWRpbygpO1xuICAgICAgICAgICAgcHJvbXB0UmVzaXplQ29uZmlybUNvbnRyb2xsZXIoc2l6ZSk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSZXNpemVDb250cm9sbGVyKHNpemUpIHtcbiAgICAgICAgaWYgKCFiYW5rW2ByZXNpemVfJHtzaXplfWBdKSBiYW5rW2ByZXNpemVfJHtzaXplfWBdID0gY3JlYXRlUmVzaXplQ29udHJvbGxlcihzaXplKTtcbiAgICAgICAgcmV0dXJuIGJhbmtbYHJlc2l6ZV8ke3NpemV9YF07XG4gICAgfSAgICAgICAgXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZXNpemVDb25maXJtQ29udHJvbGxlcigpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZXMucmVzaXplQ29uZmlybSgpO1xuICAgICAgICBjb25zdCBkdW1teUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdW1teUNvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGR1bW15Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5nb21va3VSZXNpemVDb25maXJtJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdvbW9rdUJ0bi5jYW5jZWwnKTtcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlc2l6ZUNvbmZpcm1Db250cm9sbGVyKCkge1xuICAgICAgICBpZiAoIWJhbmtbYHJlc2l6ZUNvbmZpcm1gXSkgYmFua1tgcmVzaXplQ29uZmlybWBdID0gY3JlYXRlUmVzaXplQ29uZmlybUNvbnRyb2xsZXIoKTtcbiAgICAgICAgcmV0dXJuIGJhbmtbYHJlc2l6ZUNvbmZpcm1gXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9tcHRSZXNpemVDb25maXJtQ29udHJvbGxlcihzaXplKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRSZXNpemVDb25maXJtQ29udHJvbGxlcigpO1xuICAgICAgICBjb25zdCBjb25maXJtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ29tb2t1QnRuLmNvbmZpcm0nKTtcbiAgICAgICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgICAgICAgICBnYW1lLnJlc2V0KHNpemUpXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFubm91bmNlV2lubmVyQ29udHJvbGxlcigpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZXMuYW5ub3VuY2VXaW5uZXIoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdHJvcGh5OiBhc3NldHMudHJvcGh5KCkgfTtcbiAgICAgICAgY29uc3QgaHRtbCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgZGF0YSk7XG4gICAgICAgIGNvbnN0IGR1bW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1bW15Q29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkdW1teUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ29tb2t1QW5ub3VuY2VXaW5uZXInKTtcbiAgICAgICAgY29uc3QgYnRuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ29tb2t1QnRuLmNvbmZpcm0nKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCgpID0+IGVsZW1lbnQucmVtb3ZlKCkpKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QW5ub3VuY2VXaW5uZXJDb250cm9sbGVyKCkge1xuICAgICAgICBpZiAoIWJhbmtbJ2Fubm91bmNlV2lubmVyJ10pIGJhbmtbJ2Fubm91bmNlV2lubmVyJ10gPSBjcmVhdGVBbm5vdW5jZVdpbm5lckNvbnRyb2xsZXIoKTtcbiAgICAgICAgcmV0dXJuIGJhbmtbJ2Fubm91bmNlV2lubmVyJ107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udHJvbEJhcigpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZXMuY29udHJvbEJhcigpO1xuICAgICAgICBjb25zdCBkdW1teUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdW1teUNvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgY29udHJvbEJhciA9IGR1bW15Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5nb21va3VDb250cm9sQmFyJyk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sQmFyLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sJyk7XG4gICAgICAgIGNvbnN0IHJlc2l6ZSA9IGNvbnRyb2xCYXIucXVlcnlTZWxlY3RvcignLnJlc2l6ZScpO1xuICAgICAgICBjb250cm9sLmFwcGVuZENoaWxkKGdldFBsYXllckNvbnRyb2xsZXIoKSk7XG4gICAgICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoZ2V0Um9sbEJhY2tDb250cm9sbGVyKCkpO1xuICAgICAgICBjb250cm9sLmFwcGVuZENoaWxkKGdldFJlc3RhcnRDb250cm9sbGVyKCkpO1xuICAgICAgICBjb250cm9sLmFwcGVuZENoaWxkKGdldFRvZ2dsZU51bWJlckNvbnRyb2xsZXIoKSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsU2l6ZSA9IFs5LCAxMSwgMTMsIDE1LCAxOV07XG4gICAgICAgIG9wdGlvbmFsU2l6ZS5mb3JFYWNoKHNpemUgPT4gcmVzaXplLmFwcGVuZENoaWxkKGdldFJlc2l6ZUNvbnRyb2xsZXIoc2l6ZSkpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xCYXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udHJvbEJhcigpIHtcbiAgICAgICAgaWYgKCFiYW5rWydjb250cm9sQmFyJ10pIGJhbmtbJ2NvbnRyb2xCYXInXSA9IGNyZWF0ZUNvbnRyb2xCYXIoKTtcbiAgICAgICAgcmV0dXJuIGJhbmtbJ2NvbnRyb2xCYXInXTtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gY3JlYXRlR29tb2t1TWFpbigpIHtcbiAgICAgICAgY29uc3QgZ29tb2t1RGVmYXVsdFNpemUgPSAxNTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGFzc2V0cy5iYWNrZ3JvdW5kKCk7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBhc3NldHMubG9nbygpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlcy5nb21va3VNYWluKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGJhY2tncm91bmQ6IGJhY2tncm91bmQsIGxvZ286IGxvZ28gfTtcbiAgICAgICAgY29uc3QgaHRtbCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgZGF0YSk7XG4gICAgICAgIGNvbnN0IGR1bW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1bW15Q29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkdW1teUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ29tb2t1TWFpbicpO1xuICAgICAgICBjb25zdCBib2FyZFNlY3Rpb24gPSBtYWluLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgICAgICBnYW1lLmluaXQoZ29tb2t1RGVmYXVsdFNpemUpO1xuICAgICAgICBib2FyZC5pbnNlcnRCb2FyZChib2FyZFNlY3Rpb24pO1xuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHb21va3VNYWluKCkge1xuICAgICAgICBpZiAoIWJhbmtbJ2dvbW9rdU1haW4nXSkgYmFua1snZ29tb2t1TWFpbiddID0gY3JlYXRlR29tb2t1TWFpbigpO1xuICAgICAgICByZXR1cm4gYmFua1snZ29tb2t1TWFpbiddOyBcbiAgICB9XG5cbiAgICByZXR1cm4geyBoYXNDb250cm9sbGVyLCBnZXRQbGF5ZXJDb250cm9sbGVyLCBnZXRSb2xsQmFja0NvbnRyb2xsZXIsIHRvZ2dsZVBsYXllckNvbnRyb2xsZXIsIHJlc2V0UGxheWVyQ29udHJvbGxlciwgZ2V0UmVzdGFydENvbnRyb2xsZXIsIGdldFRvZ2dsZU51bWJlckNvbnRyb2xsZXIsIGdldFJlc2l6ZUNvbnRyb2xsZXIsIGdldEFubm91bmNlV2lubmVyQ29udHJvbGxlciwgZ2V0Q29udHJvbEJhciwgZ2V0R29tb2t1TWFpbiB9O1xufSkoKTtcblxuLyogQVBJICovXG5leHBvcnQgY29uc3QgZ29tb2t1ID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGluc2VydEJvYXJkKGNvbnRhaW5lciwgc2l6ZSkge1xuICAgICAgICBnYW1lLmluaXQoc2l6ZSk7XG4gICAgICAgIGJvYXJkLmluc2VydEJvYXJkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0UGxheWVyQ29udHJvbGxlcihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRyb2xsZXJzLmdldFBsYXllckNvbnRyb2xsZXIoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0Um9sbEJhY2tDb250cm9sbGVyKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udHJvbGxlcnMuZ2V0Um9sbEJhY2tDb250cm9sbGVyKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydFJlc3RhcnRDb250cm9sbGVyKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udHJvbGxlcnMuZ2V0UmVzdGFydENvbnRyb2xsZXIoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0VG9nZ2xlTnVtYmVyQ29udHJvbGxlcihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRyb2xsZXJzLmdldFRvZ2dsZU51bWJlckNvbnRyb2xsZXIoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0UmVzaXplQ29udHJvbGxlcihjb250YWluZXIsIHNpemUpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRyb2xsZXJzLmdldFJlc2l6ZUNvbnRyb2xsZXIoc2l6ZSkpO1xuICAgIH1cblxuICAgIC8qIEFuIG91dC1vZi1ib3ggY29udHJvbCBiYXIgY29tbWluZyB3aXRoIGFsbCBjb250cm9sbGVycyAqL1xuICAgIGZ1bmN0aW9uIGluc2VydENvbnRyb2xCYXIoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250cm9sbGVycy5nZXRDb250cm9sQmFyKCkpO1xuICAgIH1cblxuICAgIC8qIEFuIG91dC1vZi1ib3ggZ29tb2t1IGdhbWUgaW50ZXJmYWNlICovXG4gICAgZnVuY3Rpb24gaW5zZXJ0R29tb2t1TWFpbihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRyb2xsZXJzLmdldEdvbW9rdU1haW4oKSk7XG4gICAgfVxuXG4gICAgLyogT3B0aW9uYWwgQVBJICovXG4gICAgLyogVXNlciBjYW4gcHJvdmlkZSB0aGVpciBvd24gZnVuY3Rpb24gb2Ygc2hvd2luZyB3aW5uZXIuXG4gICAgICogVGhlIFwiZm5cIiBmdW5jdGlvbiBzaG91bGQgcmVjaWV2ZSBhIHN0cmluZyBhcyBhcmd1bWVudCAqL1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyQW5ub3VuY2VXaW5uZXIoZm4pIHtcbiAgICAgICAgcGx1Z2lucy5yZWdpc3RlcignYW5ub3VuY2VXaW5uZXInLCBmbik7XG4gICAgfSBcblxuICAgIHJldHVybiB7IGluc2VydEJvYXJkLCBpbnNlcnRQbGF5ZXJDb250cm9sbGVyLCBpbnNlcnRSb2xsQmFja0NvbnRyb2xsZXIsIGluc2VydFJlc3RhcnRDb250cm9sbGVyLCBpbnNlcnRUb2dnbGVOdW1iZXJDb250cm9sbGVyLCBpbnNlcnRSZXNpemVDb250cm9sbGVyLCBpbnNlcnRDb250cm9sQmFyLCBpbnNlcnRHb21va3VNYWluLCByZWdpc3RlckFubm91bmNlV2lubmVyIH07XG59KSgpO1xuIiwiLyogYXVkaW8gKi9cbmltcG9ydCBWaWN0b3J5QXVkaW8xIGZyb20gJy4uL2Fzc2V0cy9nb21va3Uvc291bmQvdmljdG9yeTEud2F2JztcbmltcG9ydCBWaWN0b3J5QXVkaW8yIGZyb20gJy4uL2Fzc2V0cy9nb21va3Uvc291bmQvdmljdG9yeTIud2F2JztcbmltcG9ydCBWaWN0b3J5QXVkaW8zIGZyb20gJy4uL2Fzc2V0cy9nb21va3Uvc291bmQvdmljdG9yeTMud2F2JztcbmltcG9ydCBCbGFja1BpZWNlQXVkaW8gZnJvbSAnLi4vYXNzZXRzL2dvbW9rdS9zb3VuZC9ibGFja1BpZWNlU291bmQud2F2JztcbmltcG9ydCBXaGl0ZVBpZWNlQXVkaW8gZnJvbSAnLi4vYXNzZXRzL2dvbW9rdS9zb3VuZC93aGl0ZVBpZWNlU291bmQud2F2JztcbmltcG9ydCBDbGlja0F1ZGlvIGZyb20gJy4uL2Fzc2V0cy9nb21va3Uvc291bmQvYnV0dG9uQ2xpY2sud2F2Jztcbi8qIGltYWdlICovXG5pbXBvcnQgVHJvcGh5SW1nIGZyb20gJy4uL2Fzc2V0cy9nb21va3UvaW1nL3Ryb3BoeS5wbmcnO1xuaW1wb3J0IEJhY2tncm91bmRJbWcgZnJvbSAnLi4vYXNzZXRzL2dvbW9rdS9pbWcvYmFjay5wbmcnO1xuaW1wb3J0IExvZ29JbWcgZnJvbSAnLi4vYXNzZXRzL2dvbW9rdS9pbWcvbG9nby5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gICAgY29uc3QgYnBhID0gbmV3IEF1ZGlvKEJsYWNrUGllY2VBdWRpbyk7XG4gICAgY29uc3Qgd3BhID0gbmV3IEF1ZGlvKFdoaXRlUGllY2VBdWRpbyk7XG4gICAgY29uc3QgdmExID0gbmV3IEF1ZGlvKFZpY3RvcnlBdWRpbzEpO1xuICAgIGNvbnN0IHZhMiA9IG5ldyBBdWRpbyhWaWN0b3J5QXVkaW8yKTtcbiAgICBjb25zdCB2YTMgPSBuZXcgQXVkaW8oVmljdG9yeUF1ZGlvMyk7XG4gICAgY29uc3QgY2EgPSBuZXcgQXVkaW8oQ2xpY2tBdWRpbyk7XG5cbiAgICBmdW5jdGlvbiB0cm9waHkoKSB7XG4gICAgICAgIHJldHVybiBUcm9waHlJbWc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmxhY2tQaWVjZUF1ZGlvKCkge1xuICAgICAgICByZXR1cm4gYnBhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdoaXRlUGllY2VBdWRpbygpIHtcbiAgICAgICAgcmV0dXJuIHdwYTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGlja0F1ZGlvKCkge1xuICAgICAgICByZXR1cm4gY2E7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmljdG9yeUF1ZGlvcygpIHtcbiAgICAgICAgcmV0dXJuIFt2YTEsIHZhMiwgdmEzXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYWNrZ3JvdW5kKCkge1xuICAgICAgICByZXR1cm4gQmFja2dyb3VuZEltZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dvKCkge1xuICAgICAgICByZXR1cm4gTG9nb0ltZztcbiAgICB9XG5cbiAgICByZXR1cm4geyB0cm9waHksIGJsYWNrUGllY2VBdWRpbywgd2hpdGVQaWVjZUF1ZGlvLCBjbGlja0F1ZGlvLCB2aWN0b3J5QXVkaW9zLCBiYWNrZ3JvdW5kLCBsb2dvIH07XG59KSgpOyIsImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBsYXJnZUJ0bigpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb21va3VCdG4gYnRuLWxnXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIG1hdGVyaWFsLWljb25zXCI+e3tpY29ufX08L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3t0ZXh0fX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbm5vdW5jZVdpbm5lcigpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb21va3VQcm9tcHRGb3JtIGdvbW9rdUFubm91bmNlV2lubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cm9waHlcIj48aW1nIHNyYz1cInt7dHJvcGh5fX1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvbW9rdUJ0biBidG4tbGcgY29uZmlybVwiPldvdyE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVDb25maXJtKCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvbW9rdVByb21wdEZvcm0gZ29tb2t1UmVzaXplQ29uZmlybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5FbmQgdGhlIGN1cnJlbnQgZ2FtZSBhbmQgY3JlYXRlIGEgbmV3IGJvYXJkPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bnNcIj48ZGl2IGNsYXNzPVwiZ29tb2t1QnRuIGJ0bi1zbSBjb25maXJtXCI+Q29uZmlybTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvbW9rdUJ0biBidG4tc20gY2FuY2VsXCI+Q2FuY2VsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheWVyKCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IFxuICAgICAgICBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb21va3VQbGF5ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFjayBjdXJyZW50XCI+QmxhY2s8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZVwiPldoaXRlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udHJvbEJhcigpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBcbiAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvbW9rdUNvbnRyb2xCYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5HYW1lIFNpemU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzaXplXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBnb21va3VNYWluKCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IFxuICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ29tb2t1TWFpblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tiYWNrZ3JvdW5kfX1cIiBhbHQ9XCJiYWNrXCIgY2xhc3M9XCJiYWNrZ3JvdW5kMVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tiYWNrZ3JvdW5kfX1cIiBhbHQ9XCJiYWNrXCIgY2xhc3M9XCJiYWNrZ3JvdW5kMlwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvLWltZ1wiPjxpbWcgc3JjPVwie3tsb2dvfX1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5HT01PS1U8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJib2FyZFwiPjwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImZvb3RlclwiPjwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbGFyZ2VCdG4sIGFubm91bmNlV2lubmVyLCByZXNpemVDb25maXJtLCBwbGF5ZXIsIGNvbnRyb2xCYXIsIGdvbW9rdU1haW4gfTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiaW1wb3J0IHsgZ29tb2t1IH0gZnJvbSAnLi9nb21va3UuanMnO1xuaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCBHaXRodWJMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWcvZ2l0aHViX2JsYWNrLnBuZyc7XG5cbmNvbnN0IGluaXRHb21va3UgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBmdW5jdGlvbiBpbnNlcnRGb290U2lnbmF0dXJlKCkge1xuICAgICAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBmb290ZXJTaWduYXR1cmUgPSBcbiAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29weXJpZ2h0XCI+XG4gICAgICAgICAgICBDb3B5cmlnaHQgwqkgaGlyZW1lLnNoZW5AZ21haWwuY29tIDIwMjEgLSAke3llYXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic291cmNlXCI+U291cmNlIGNvZGU6IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGVsbG9TaGVuL2dvbW9rdVwiPjxpbWcgY2xhc3M9XCJnaXRodWJcIiBzcmM9XCIke0dpdGh1YkxvZ299XCI+PC9hPjwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29tb2t1TWFpbiA+IC5mb290ZXInKTtcbiAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9IGZvb3RlclNpZ25hdHVyZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBnb21va3UuaW5zZXJ0Q29udHJvbEJhcihib2R5KTtcbiAgICAgICAgZ29tb2t1Lmluc2VydEdvbW9rdU1haW4oYm9keSk7XG4gICAgICAgIGluc2VydEZvb3RTaWduYXR1cmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0IH07XG5cbn0pKCk7XG5cbmluaXRHb21va3UuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9