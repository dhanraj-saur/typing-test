import React from 'react';

const Score=({ wpm, accuracy })=> {
    return (
        <div>
            <h1>Score Summary</h1>
            <p>Words Per Minute: {wpm}</p>
            <p>Accuracy: {accuracy}%</p>
        </div>
    );
}

export default Score;