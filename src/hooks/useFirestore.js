
import { useGame } from "context";
import { setDoc,arrayUnion, updateDoc, doc,collection,increment, getDoc, runTransaction } from "firebase/firestore";
import { db, roomColRef, roomDocRef } from "helper/Firebase";



const useFirestore = () => {
  const { waiting, setWaiting} = useGame()

   
  const createRoom =  async(player1, room) => {
    await setDoc(roomDocRef, room);
    return updateDoc(roomDocRef,{ players: arrayUnion(player1)} ) // to add Player 1 to the room
  };

    const roomConfig = async( id )=> {
        const docRef = doc(collection(db, 'rooms'),id);

        try {
          await runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(docRef);
            if (!sfDoc.exists()) {
              throw "there's no such room";
            }
            if ( sfDoc.data().numberOfPlayers <= 1) {
              transaction.update(docRef, { numberOfPlayers: increment(1) });
              setWaiting(!waiting)
            } else {
              return Promise.reject("Sorry! this room is full");
            }
          });
        } catch (e) { alert(e)  }
    }; // check numb of players to join the room if any 
   
    const getRoomItems = async ( id ) => {
        const roomsDocRef = doc(db, 'rooms', id)
        return getDoc(roomsDocRef);
    }; 
     

    const addPlayer = (player2,  id) => {
        const roomDocRef = doc(db, 'rooms', id)
        return updateDoc(roomDocRef, { 
            players: arrayUnion(player2),
            numberOfPlayers: increment(1)});
    };

    const createGuessCol = async( guess, id ) => {
        const docRef = doc(roomColRef,id);
        await updateDoc(docRef, { guesses: arrayUnion(guess) });
    }; // collect the guesses of each players 

    return { addPlayer,createRoom ,roomConfig, createGuessCol, getRoomItems};
}
export default useFirestore;

    