/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"*/

export function rps(p1: string, p2: string): string {
  if (p1 === p2) 
  return "Draw!";
  
  if (p1 === "rock" && p2 === "paper" || 
      p1 === "paper" && p2 === "scissors" || 
      p1 === "scissors" && p2 === "rock") 
  return "Player 2 won!";
  
  return "Player 1 won!";
}
