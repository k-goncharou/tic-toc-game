import React from 'react';

function Square (props) {
    const {value, step, index, winner} = props
    return (
        <button className='square' onClick={() => step(value, index)} disabled={winner}>
            {value}
        </button>
    );
}

export default Square;