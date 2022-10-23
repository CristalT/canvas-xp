import './style.css';
import { initBoard, Rect } from 'board';

const board = initBoard();

board.draw(Rect, {
    backgroundColor: 'lightgreen',
    borderColor: 'black',
    borderWidth: 1,
});
