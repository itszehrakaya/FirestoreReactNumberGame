
import NumbrBtns from "components/NmbrBtns";
import Guess from "components/Guess";
import { Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useStartContext } from "context/StartContextProvider";
import { useParams } from "react-router-dom";
import useResults from "hooks/useResults";
import useListenDoc from "hooks/useListenDoc";

const Game = () => {
    

    const { ID } = useParams();
    const { results ,guess2, guess1 }  = useResults(ID);
    const { SINGLE, NEW_GAME, JOIN_GAME, HOME } = useStartContext();
    const secNumForP1 = ((results && results.map(e => ( (e.player2) && e.player2.secretNumber )))[0]);
    const secNumForP2 = ((results && results.map(e => ( (e.player1) &&  e.player1.secretNumber )))[0]);

    const  { gameStarts } = useListenDoc(ID)
  
    const [isCopied, setIsCopied] = useState(false);
    const copyTextToClipboard = async (text) => {
        if ("clipboard" in navigator) return await navigator.clipboard.writeText(text);
        return document.executeCommand("copy", true, text);
    };

        
    const handleCopyClick = () => {
        copyTextToClipboard(ID)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            });
    };

    return (
        <> { !SINGLE && 
            <>
                <p style={{ color: 'gray'}} 
                    onClick={ handleCopyClick } 
                    value={ ID }>{ isCopied ? "Copied!" : ID }</p>
                <p className="d-flex justify-content-center ">PLAYERS</p>
            </>
          }
        <Row>
            <Col> { results && results.map((e)=> ( <div key={e.id}> 
                    {e.player1.username} <br/>
                    <p style={{ color: 'gray'}} > 
                        { (NEW_GAME || HOME) && e.player1.secretNumber } </p></div> ) )} 
                     
             </Col>
                <Col> { results.map((e )=> ( <div key={e.id}> 
                        { e.player2 ? e.player2.username : "waiting" } <br/>
                        <p  style={{ color: 'gray'}} >  
                            { (JOIN_GAME || HOME) && e.player2.secretNumber } </p> </div>) )} </Col>
                  </Row>
             { gameStarts ?  <NumbrBtns /> : HOME && "demo: there will be seen the results of the game  "  }

         <br/>
            <Row> 
                <Col>
                    <Card>
                        <ol> { guess1 && guess1.map(( e, index ) => (<li  key= { index } > 
                                    <Guess
                                        secretNumber ={ secNumForP1 }
                                        guess= { e }
                                        key= { index } /> </li> ))} </ol> 
                    </Card>
                </Col>

                { !SINGLE && 
                    <Col>  
                        <Card> 
                            <ol> { guess2 && guess2.map(( e, index ) => (<li  key= { index } >
                                <Guess
                                    secretNumber = { secNumForP2 }
                                    guess= { e }
                                    key= { index } /> </li> ))} </ol> 
                        </Card>
                    </Col>
                }
           </Row>
        </> 
    );
}
export default Game;
