const getUserChoice = userInput =>
{
userInput = userInput.toLowerCase ();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
{
  return userInput;
} else console.log ('ERROR:Incorrect data input');
};

const userInput = 'Rock';

const getComputerChoice = () =>
{
  let ComputerChoice = Math.floor(Math.random()*3);
  if (ComputerChoice === 0) {
    return 'rock';
  } else if (ComputerChoice === 1) {
    return 'paper';
  } else if (ComputerChoice === 2) {
    return 'scissors';
  }
}


const determineWinner = () =>
{
  const userChoice = getUserChoice(userInput);
  const computerChoice = getCompterChoice();
  if (userChoice === computerChoice) {
    return 'Tie game round. Please play again.';
  }
  if (userChoice === "rock")
  {
    if (computerChoice === "scissors")
  }
}


console.log (determineWinner());
//console.log(getComputerChoice());
