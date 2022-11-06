

const Guess = (props) => {
    const { guess, secretNumber } = props;
    const valueArray = Array.from((guess), Number);

    let bulls = 0;
    let bullsAndCows = 0;
    var cows = newFunction();
  
    // const gameOver = async ()=> {
    //     alert(`congrats!, ${secretNumber} you find the secret number with ${items.length} try! 
    //     returning to main page....`)
    //     return new Promise(resolve => {setTimeout(() => {resolve(navigate("/"));}, 1000);
    //     });// the other player should know that rival finish the game !
    // }// this should be different! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    // if(bulls === secretNumber.length)(gameOver())
    return (<p className='GuessNumber'style={{ color: 'darkRed'}}> {valueArray}: + {bulls}  - {cows} </p>)
    
    function newFunction() {
      
        for (let i in valueArray)
            for (let j in secretNumber) {
                if (valueArray[i] === secretNumber[j]) { bullsAndCows++; } if (valueArray[i] === secretNumber[j])
                    if (i === j) { bulls++; } var cows = bullsAndCows - bulls;
            }
   
      

        return cows;
   
    }
};
export default Guess;