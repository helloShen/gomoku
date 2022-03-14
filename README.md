# gomoku
![javascript](https://img.shields.io/badge/javascript-ES6-brightgreen) ![grid](https://img.shields.io/badge/grid-1.0-brightgreen) ![css3](https://img.shields.io/badge/css-3.0-brightgreen) ![html5](https://img.shields.io/badge/html-5.0-brightgreen) ![svg](https://img.shields.io/badge/svg-1.1-brightgreen)


Online Javascript Gomoku. Enjoy spare time with your friend. Online preview: [ciaoshen.com](http://ciaoshen.com/gomoku)

<img src="./assets/img/gomoku.gif" width="500">

## It can be easily integrated into your website 
1. Create your own website.
2. Import following files into your project,
    1) `gomoku.js`
    2) `gomoku.css`
    3) everything under `./assets/gomoku/` repository.
3. Call `gomoku` API in your own Javascript file as follow.

```js
import { gomoku } from './gomoku.js';

const defaultSize = 15;
const optionalSize = [9, 11, 13, 15, 19];
const container = document.querySelector('your-container');

/* initialize the gomoku modules */
gomoku.init(defaultSize);

/* insert modules into your web page */
gomoku.insertRollBackController(container);
gomoku.insertRestartController(container);
gomoku.insertToggleNumberController(container);
optionalSize.forEach(size => gomoku.insertResizeController(container, size));
gomoku.insertBoard(container);
```

Happy coding!