
import { query,where, onSnapshot } from "firebase/firestore";
import { roomColRef } from "helper/Firebase";
import { useEffect, useState } from "react";

const useResults = (ID) => {   
    const [ results, setResults ] = useState([]);
    const [ guess1, setGuess1 ] = useState([]);
    const [ guess2, setGuess2 ] = useState([]);

    useEffect(() => {
        const q = query(roomColRef, where("roomId", "==", ID ))
        const unsub = onSnapshot(q,(snapshot)=>{
            
            const items1 = snapshot.docs.map((doc) => 
                doc.data().guesses.filter((item) => 
                    (item.from == doc.data().players[0].id))) 
                    setGuess1(items1[0].map(e => e.guess))
                    
            const items2 = snapshot.docs.map((doc) => 
                doc.data().guesses.filter((item) => 
                    (item.from == doc.data().players[1].id))) 
                    setGuess2(items2[0].map(e => e.guess))

            setResults(snapshot.docs.map(doc=>({
                id: doc.id,
                room: doc.data(),
                player1: doc.data().players[0],
                player2: doc.data().players[1],
            })))
        }) 
        return () => unsub();
    },[ID]);
    return   { results, guess1, guess2 }

}
export default useResults;





