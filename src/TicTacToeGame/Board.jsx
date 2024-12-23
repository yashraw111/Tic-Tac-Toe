import React, { useState } from "react";
import Square from "./Square";
import "../../src/App.css";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogin) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const isWinner = checkWinner();

  const playAgain = () => {
    setState(Array(9).fill(null));
  };

  const handleClick = (index) => {
    if (state[index] || isWinner) return;

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";

    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  return (
    <>
     
        <div
        className="main"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // minHeight: "100vh",
            // backgroundColor: "#f1f1f1",
          }}
        >
          <h1 style={{ color: "#fff", marginBottom: "20px" }}>
            {isWinner
              ? `${isWinner} Wins!`
              : `Player ${isXTurn ? "X" : "O"}'s Turn`}
          </h1>
          <div
            className="board-container"
            style={{
              display: "grid",
              gap: "5px",
              gridTemplateColumns: "repeat(3, 100px)",
            }}
          >
            {state.map((value, index) => (
              <Square
                key={index}
                onClick={() => handleClick(index)}
                value={value}
              />
            ))}
          </div>
          {isWinner && (
            <button
              onClick={playAgain}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#F2BF00",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Play Again
            </button>
          )}
        </div>
    </>
  );
};

export default Board;
