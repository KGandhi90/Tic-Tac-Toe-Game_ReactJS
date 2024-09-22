import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const initialState = Array(9).fill(null);
    const [isXTurn, setIsXTurn] = useState(true);
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let logic of winnerLogic){
            const [a, b, c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
            if (!state.includes(null) && state[a] !== state[b] && state[a] !== state[c]) {
                return `It's a Tie, Nobody `;
 }
        }
        return false;
    }

    const isWinner = checkWinner();

    const HandleClick = (index) => {
        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    return (
        <div className="board-container" align="center">
            {isWinner ? (
                <><h2>{isWinner} Won The Game !</h2> <br /><button onClick={() => {
                    setState(initialState);
                }}>Reset Game</button></>
            ) : (
                <>
                    <h2>{isXTurn ? "X" : "O"}'s Turn</h2>
                    <div className="board-row">
                        <Square onClick={() => HandleClick(0)} value={state[0]} />
                        <Square onClick={() => HandleClick(1)} value={state[1]} />
                        <Square onClick={() => HandleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => HandleClick(3)} value={state[3]} />
                        <Square onClick={() => HandleClick(4)} value={state[4]} />
                        <Square onClick={() => HandleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => HandleClick(6)} value={state[6]} />
                        <Square onClick={() => HandleClick(7)} value={state[7]} />
                        <Square onClick={() => HandleClick(8)} value={state[8]} />
                    </div>
                </>
            )}
            
        </div>
    )
}

export default Board;