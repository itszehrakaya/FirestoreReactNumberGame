import { useState } from "react";
import { Card } from "react-bootstrap";

const HowToPlay = ()=> {
    const [ howToPlay, setHowToPlay ] = useState(false);
    return ( 
    <> 
      <div className="position-relative">
        <button
            className="btn btn-inline-success top-0 end-0" 
            style={ { color: "green" } } 
            onClick={ () => setHowToPlay( !howToPlay ) } >?¿</button></div>

        {howToPlay && 
          <>
            <div className="app d-flex align-items-center justify-content-center ">
              <Card  style={ { width: "50%" } }>
                <p>
                  <br/>The players each write a n-digit secret number.
                    <br/>The digits must be all different. 
                      <br/>Then, in turn, the players try to guess their opponent's number who gives the number of matches.
                        <br/>The digits of the number guessed also must all be different.
                          <br/>If the matching digits are in their right positions, they are "+", if in different positions, they are "-". Example:
                            </p>
                        <li>Secret number: 4271</li> 
                      <li>Opponent's try: 1234</li> 
                    <li>Answer: + 1  and - 2 . (The + is "2", the - are "4" and "1".)</li> 
                  <li>The first player to reveal the other's secret number wins the game.</li> <br/>
              </Card>
            </div>
          </>
        } 
    </>
  )
}
export default HowToPlay;
