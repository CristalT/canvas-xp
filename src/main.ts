import './style.css';
import { initBoard, Rect } from './board';

const board = initBoard(document.body.querySelector('#app')!);

board.draw(Rect);
