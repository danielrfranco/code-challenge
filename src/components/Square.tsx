export type Player = 'X' | 'O';

interface SquareProps {
  index: number;
  player: Player;
  onClick: (index: number) => void;
}

export default function Square({index, onClick, player}: SquareProps): React.ReactElement {
  return (
    <div className="square" onClick={() => onClick(index)}>
      {player}
    </div>
  )
}