import React, { useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkForWinner = (squares) => {
    let flag = false;
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        //pattern is array from above keys
        //for the co ibation of [3 ,4 , 5] pattern [0] = 3 so squares[pattern[0]] = sqaures[3] , simmilarly for other pattern
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          //do nothing in case because
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          //if value equals in sqaures array from above comibations

          setWinner(squares[pattern[0]]);
          setTurn("");
          flag = true;
        }
      });
    }

    return flag;
  };

  const isGameOverFun = (squares) => {
    return !squares.includes("");
  };

  const handleClick = (num) => {
    setWinner("");
    if (cells[num] !== "") {
      return;
    }

    let squares = [...cells];

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }

    const isWinner = checkForWinner(squares);

    if (isWinner) {
      setCells(Array(9).fill(""));
      return 0;
    }

    const isGamnOver = isGameOverFun(squares);

    if (isGamnOver) {
      alert("Game Over ");
      setCells(Array(9).fill(""));
      setTurn("x");
      return 0;
    }
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  // const Cell = ({ num }) => {
  //   return (
  //     <td className={cells[num]==="x"?"colorBlue":"colorRed"  }onClick={() => handleClick(num)}>
  //       {cells[num]}
  //     </td>
  //   );
  // };

  return (
    <div className="container">
      <div className="status">
        <div className="player-1">
          <h1>X</h1>
          <p>
            player 1 <br />
            <span>
              <p className="colorGrenn">{winner === "x" ? "You win" : ""}</p>
              {turn === "x" ? "Your Turn" : ""}
            </span>
          </p>
        </div>
        <div className="player-2">
          <p>
            player 2 <br />
            <span>
              <p className="colorGrenn">{winner === "o" ? "You win" : ""}</p>
              {turn === "o" ? "Your Turn" : ""}
            </span>
          </p>
          <h1>o</h1>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td
              className={cells[0] === "x" ? "colorBlue" : "colorRed"}
              onClick={() => handleClick(0)}
            >
              {cells[0]}
            </td>
            <td
              className={cells[1] === "x" ? "colorBlue vert" : "colorRed vert"}
              onClick={() => handleClick(1)}
            >
              {cells[1]}
            </td>
            <td
              className={cells[2] === "x" ? "colorBlue" : "colorRed"}
              onClick={() => handleClick(2)}
            >
              {cells[2]}
            </td>
          </tr>
          <tr>
            <td
              className={cells[3] === "x" ? "colorBlue hori" : "colorRed hori"}
              onClick={() => handleClick(3)}
            >
              {cells[3]}
            </td>
            <td
              className={
                cells[4] === "x" ? "colorBlue  hori vert" : "colorRed hori vert"
              }
              onClick={() => handleClick(4)}
            >
              {cells[4]}
            </td>
            <td
              className={cells[5] === "x" ? "colorBlue hori" : "colorRed hori"}
              onClick={() => handleClick(5)}
            >
              {cells[5]}
            </td>
          </tr>
          <tr>
            <td
              className={cells[6] === "x" ? "colorBlue" : "colorRed"}
              onClick={() => handleClick(6)}
            >
              {cells[6]}
            </td>
            <td
              className={cells[7] === "x" ? "colorBlue vert" : "colorRed vert"}
              onClick={() => handleClick(7)}
            >
              {cells[7]}
            </td>
            <td
              className={cells[8] === "x" ? "colorBlue" : "colorRed"}
              onClick={() => handleClick(8)}
            >
              {cells[8]}
            </td>
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <button onClick={() => handleRestart()}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
