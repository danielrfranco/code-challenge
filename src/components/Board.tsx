import { useState } from "react";
import Square, {Player} from "./Square";
import { hasWon } from "../utils/helperFunctions";

const X = 'X';
const O = 'O';
const boardInitialState = Array(9).fill(null);

export default function Board(): React.ReactElement {
  const [nextPlayer, setNextPlayer] = useState<Player>(X);
  const [boardArray, setBoardArray] = useState<Player[]>(boardInitialState);
  const [winner, setWinner] = useState<Player>();

  const [xMoves, setXMoves] = useState<number[]>([]);
  const [oMoves, setOMoves] = useState<number[]>([]);

  const switchPlayer = (): void => {
    if (nextPlayer === X) {
      setNextPlayer(O);
    } else {
      setNextPlayer(X);
    }
  }

  const resetGame = (): void => {
    setNextPlayer(X);
    setBoardArray(boardInitialState);
    setWinner(undefined);
    setXMoves([]);
    setOMoves([]);
  }

  const clickHandler = (index: number): void => {
    if (!winner) {
      const newBoardArray = [...boardArray];
      newBoardArray[index] = nextPlayer;
      setBoardArray(newBoardArray);
      
      let newPlayerMovesArray;
      if (nextPlayer === X) {
        newPlayerMovesArray = [...xMoves, index];
        setXMoves(newPlayerMovesArray);
      } else {
        newPlayerMovesArray = [...oMoves, index];
        setOMoves(newPlayerMovesArray);
      }
  
      if (hasWon(newPlayerMovesArray)) {
        setWinner(nextPlayer);
      } else {
        switchPlayer();
      }
    }
  }

  return (
    <div className="board">
      <div className="header">
        {winner ? (
          <h3>Winner!: {winner}</h3>
        ): (
          <h3>Next move: {nextPlayer}</h3>
        )}
      </div>

      <div className="gameContainer">
        <div className="square-container">
          <Square index={0} player={boardArray[0]} onClick={clickHandler}/>
          <Square index={1} player={boardArray[1]} onClick={clickHandler}/>
          <Square index={2} player={boardArray[2]} onClick={clickHandler}/>
        </div>
        <div className="square-container">
          <Square index={3} player={boardArray[3]} onClick={clickHandler}/>
          <Square index={4} player={boardArray[4]} onClick={clickHandler}/>
          <Square index={5} player={boardArray[5]} onClick={clickHandler}/>
        </div>
        <div className="square-container">
          <Square index={6} player={boardArray[6]} onClick={clickHandler}/>
          <Square index={7} player={boardArray[7]} onClick={clickHandler}/>
          <Square index={8} player={boardArray[8]} onClick={clickHandler}/>
        </div>
      </div>

      <button onClick={resetGame}>Reset game</button>
    </div>
  )
}