export default (() => {

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
})();