
import { createContext, useContext,  useState } from "react";
const GameContext = createContext();
export function useGame() {
    return useContext(GameContext);
}
export function GameProvider({ children }) {
    const [ waiting, setWaiting ] = useState(false);
    const [ roomId, setRoomId ] = useState("");
    const [ playerID, setPlayerID ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ digits, setDigits ] = useState(4);
    const [ secret, setSecret ] = useState('');

    const value = {
        roomId, setRoomId,
        playerID, setPlayerID,
        username, setUsername,
        digits, setDigits,
        secret, setSecret,
        waiting, setWaiting
    };
    return <GameContext.Provider value={ value }>{ children }</GameContext.Provider>;
}
