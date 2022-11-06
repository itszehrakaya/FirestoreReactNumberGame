import { useStartContext } from "context/StartContextProvider";
import { query, where, onSnapshot } from "firebase/firestore";
import { roomColRef } from "helper/Firebase";
import { useEffect, useState } from "react";

const useListenDoc = (roomId) => {   
    const { HOME } = useStartContext();
    const [ docId, setDocId ] = useState(null);
    const [ gameStarts, setGameStarts ] =  useState(false) 
    useEffect(() => {
        const q = query(roomColRef,where("roomId", "==", roomId))
        const unsub = onSnapshot(q, (snapshot) => { 
            snapshot.docs.forEach(doc => {
                const countPlayers = doc.data().numberOfPlayers == 2;
                 { HOME ? setGameStarts(false): (countPlayers) && setGameStarts(true) }
                setDocId(doc.id)
            });
         })
        return () => unsub();
    }, [roomId]);
    return { docId, gameStarts };  
}
export default useListenDoc;
