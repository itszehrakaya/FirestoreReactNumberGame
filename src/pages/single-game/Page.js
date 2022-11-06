import ChangeName from "components/ChangeName";
import SetDigits from "components/SetDigits";
import SecretNumCreator from "helper/secret";
import { useGame } from "context";  
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import MakeId from "helper/MakeId";
import { addDoc, serverTimestamp, setDoc, updateDoc } from "@firebase/firestore";
import { db, roomColRef, roomDocRef } from "helper/Firebase";
const Page = () => {
    const {setUserValue, username, digits, setSecretNumber,setRoomId} = useGame();
    const navigate = useNavigate();
    const secretNumber = SecretNumCreator(digits);
    const roomId = MakeId(5)

    const playerInfo = {
        created: serverTimestamp(),
        roomId: roomId,
        secretNumber: secretNumber,
        username: username,
        digits: digits

    }
    const createRoom = async ()=> { await setDoc(roomDocRef, playerInfo);}


    const handleSubmit = async (e)=> {
        e.preventDefault();
        if (!username)
            return;
        setUserValue(username);

        setRoomId(roomId)

        setSecretNumber(secretNumber);
        console.log(secretNumber)
        await createRoom()
        navigate(`${roomId}`)
    }
    return ( 
        <>
            <Form  onSubmit={ handleSubmit }>
                <ChangeName /><br/>
                <SetDigits />
                <Button variant="dark" type="submit"> Start Game </Button>
            </Form>
        </>
    );
}
export default Page;
