import React from 'react';
import Square from "./Square";

const Board = (props) => {
    const{board, step, winner} = props
    return (
        <div className='board'>
            {board.map((elem, i) => <Square value={elem}  step={step} index={i} winner={winner}/>)}
        </div>
    );
};

export default Board;