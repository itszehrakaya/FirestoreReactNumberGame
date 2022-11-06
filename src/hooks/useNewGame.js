
import { serverTimestamp } from "firebase/firestore";
import { useGame } from "context";
import { useNavigate } from "react-router-dom";
import MakeId from "helper/MakeId";
import useFirestore from "./useFirestore";


const useNewGame = () => {
    const roomId = MakeId(5);
    const playerID = MakeId(10);
    const navigate = useNavigate();
    const { createRoom } = useFirestore();
    const { secret, setPlayerID , username, setRoomId, digits } = useGame();

    const player1 = {
        id: playerID,
        username: username,
        secretNumber:  Array.from((secret), Number) 
    };

    const room = {
        created: serverTimestamp(),
        roomId: roomId,
        digits: digits,
        numberOfPlayers: 0,
        players: [],
        guesses: [],
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username)
            return;
   
        setRoomId(roomId)
        setPlayerID(playerID)
        await createRoom( player1, room )
            .then(()=> navigate(`${roomId}`))
        
    };
    return { handleSubmit }

}
export default useNewGame;
