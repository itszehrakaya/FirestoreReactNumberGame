
import { useGame } from "context";
import { Form } from "react-bootstrap";

const SetSecret = () => {
    const { digits,  secret, setSecret } = useGame();

    return(
        <Form.Group className="mb-3">
            <Form.Label>{ digits } digits Secret Number</Form.Label>
                <Form.Control 
                    type="text" 
                    required autoComplete="off" 
                    placeholder="What's your secret number" 
                    value={ secret }
                    onChange={ ( e ) => setSecret( e.target.value ) } /> 
        </Form.Group>
    );
};

export default SetSecret;
