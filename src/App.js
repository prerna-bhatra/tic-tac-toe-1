import React from "react";
import "./styles.scss";
import TicTacToe from "./ticTacToe";

export default function App() {
  return (
    <>
      <div className="main-header">Tic Tac Toe</div>
      <TicTacToe />
    </>
  );
}
