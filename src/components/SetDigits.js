import { useGame } from "context";
import { Form } from "react-bootstrap";

const SetDigits = () => {
    const { setDigits } = useGame();

    return(
        <Form.Group className="mb-3">
            <Form.Check name="digit" type="radio"label="3 Digits"  
                onChange={ () => setDigits( 3 ) } />
            <Form.Check name="digit" type="radio"label="4 Digits"
                onChange={ () => setDigits( 4 ) } />
            <Form.Check name="digit" type="radio"label="5 Digits" 
                onChange={ () => setDigits( 5 ) } />
        </Form.Group>
    );
};

export default SetDigits;
