import ChangeName from "components/ChangeName";
import SetDigits from "components/SetDigits";
import SetSecret from "components/SetSecret";
import useNewGame from "hooks/useNewGame";
import { Button, Card, Form } from "react-bootstrap";

const NewGamePage = () => {
    const { handleSubmit } = useNewGame();
 
    return (
        <>
         <Card.Title> Game Settings </Card.Title>
         <Form onSubmit={ handleSubmit }>
             <div className="d-grid gap-2"> 
                     <ChangeName />
                     <SetDigits />
                     <SetSecret />
                 <Button variant="dark" type="submit">Join Game</Button>
             </div>
         </Form>
        </>      
    );
};

export default NewGamePage;