 <script>
      const score=JSON.parse(localStorage.getItem('score')); 

      function playGame(playerMove) {
         const computerChoice = pickByComputer();
         let result = '';
         if (playerMove === 'Scissors') {
            if (computerChoice === 'Rock') {
               result = 'You lose';
            }
            else if (computerChoice === 'Paper') {
               result = 'You win';
            } else if (computerChoice === 'Scissors') {
               result = 'Tie';
            }
            
         }


         else if (playerMove === 'Paper') {
            if (computerChoice === 'Rock') {
               result = 'You win';
            }
            else if (computerChoice === 'Paper') {
               result = 'Tie';
            } else if (computerChoice === 'Scissors') {
               result = 'You lose';
            }
           
         }


         else if (playerMove === 'Rock') {
            if (computerChoice === 'Rock') {
               result = 'Tie';
            }
            else if (computerChoice === 'Paper') {
               result = 'You lose';
            } else if (computerChoice === 'Scissors') {
               result = 'You win';
            }
         }

            if(result === 'You win') {
               score.wins+=1;
            } else if(result === 'You lose') {
               score.losses+=1;
            } else {
               score.ties+=1;
            }

            localStorage.setItem('score', JSON.stringify(score));


            alert(`You chose ${playerMove}. Computer chose ${computerChoice}.${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
         

      }
      
      function pickByComputer() {
         const randomNumber = Math.random();
         let computerChoice = '';
         if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerChoice = 'Rock';
         } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerChoice = 'Paper';
         } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerChoice = 'Scissors';
         }
         return computerChoice;
      }

   </script>
