export const hasWon = (playerMoves: number[]): boolean => {
  const winningCases = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for (const winCase of winningCases) {
    const winCaseFound = winCase.every(index => playerMoves.includes(index));
    if (winCaseFound) {
      return true;
    }
  }
  return false
}