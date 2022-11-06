import { Form } from "react-bootstrap";
import { useGame } from "context";

const ChangeName = () => {
    const {  username, setUsername } = useGame();
    return (   
        <> 
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    required autoComplete="off"
                    placeholder="Enter Your Name" 
                    value={ username } 
                    onChange={ (e) => setUsername( e.target.value ) } />  
            </Form.Group>
        </>
    )
}
export default ChangeName;
