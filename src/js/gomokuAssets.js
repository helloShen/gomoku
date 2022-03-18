/* audio */
import VictoryAudio1 from '../assets/gomoku/sound/victory1.wav';
import VictoryAudio2 from '../assets/gomoku/sound/victory2.wav';
import VictoryAudio3 from '../assets/gomoku/sound/victory3.wav';
import BlackPieceAudio from '../assets/gomoku/sound/blackPieceSound.wav';
import WhitePieceAudio from '../assets/gomoku/sound/whitePieceSound.wav';
import ClickAudio from '../assets/gomoku/sound/buttonClick.wav';
/* image */
import TrophyImg from '../assets/gomoku/img/trophy.png';
import BackgroundImg from '../assets/gomoku/img/back.png';
import LogoImg from '../assets/gomoku/img/logo.png';

export default (() => {

    const bpa = new Audio(BlackPieceAudio);
    const wpa = new Audio(WhitePieceAudio);
    const va1 = new Audio(VictoryAudio1);
    const va2 = new Audio(VictoryAudio2);
    const va3 = new Audio(VictoryAudio3);
    const ca = new Audio(ClickAudio);

    function trophy() {
        return TrophyImg;
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
        return BackgroundImg;
    }

    function logo() {
        return LogoImg;
    }

    return { trophy, blackPieceAudio, whitePieceAudio, clickAudio, victoryAudios, background, logo };
})();