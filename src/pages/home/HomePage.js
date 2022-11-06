import { useStartContext } from "context/StartContextProvider";
import { Button, Card } from "react-bootstrap";

const HomePage = () =>{
    const { singleGame, newGame, joinGame } = useStartContext()
    return(
        <>
        <Card.Title>Select Game Type</Card.Title>
            <div className="d-grid gap-2">
                <Button 
                    variant="info"  
                    style={ { width: "100%" } } 
                    onClick={newGame}>New Game</Button>
                <Button 
                    variant="secondary" 
                    style={ { width: "100%" } }  
                    onClick={joinGame}>Join Game</Button>         
                <Button 
                    variant="dark" 
                    onClick={singleGame} 
                    style={ { width: "100%" } }>Single Player</Button>
            </div>
        </> 
    )
}
export default HomePage;
