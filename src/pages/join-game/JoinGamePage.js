

import { Button, Form } from "react-bootstrap";
import { useGame } from "context";
import { useNavigate } from "react-router-dom";
import ChangeName from "components/ChangeName";
import RoomIdConfig from "./RoomIdConfig";
import useFirestore from "hooks/useFirestore";
import useListenDoc from "hooks/useListenDoc";
import MakeId from "helper/MakeId";
import SetSecret from "components/SetSecret";



const JoinGamePage = () => {

    const { addPlayer } = useFirestore()
    const { username, setPlayerID, roomId,  secret } = useGame();
    const { waiting } = useGame()
    const { docId } = useListenDoc(roomId)
    const navigate = useNavigate();
    const playerID = MakeId(10);

    const player2 = {
        id: playerID,
        username: username,
        secretNumber: Array.from((secret), Number) }

  
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (!username)
            return;

        setPlayerID(playerID)
        console.log(waiting) 
        await addPlayer( player2 ,docId)
            .then(()=> {navigate(`${roomId}`)} )
    };
    return (
        <>
         { !waiting ? <RoomIdConfig />       
         : <Form  onSubmit={ handleSubmit }>
                <Form.Group className="mb-3">
                    <ChangeName/> 
                    <SetSecret />
                </Form.Group>
                <Button variant="dark" type="submit">Join Game</Button> 
            </Form> 
         }
        </>
    );
}
export default JoinGamePage;
