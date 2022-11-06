import {  collection, getDocs } from "@firebase/firestore";
import {  db, roomColRef } from "helper/Firebase";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Rooms = ()=> {
    const [ showRooms, setShowRooms ] = useState(false);
    const [ listRooms, setListRooms ] = useState([]);
    useEffect(()=> {

        const querySnapshot =  getDocs(collection(db,'rooms'));
            querySnapshot.forEach((doc) => {
                listRooms = doc.data().roomId
            
      
        });


    },[])

    return ( 
    <> 
      <div className="position-relative">
        <button
            className="btn btn-inline-success top-0 end-0" 
            style={ { color: "green" } } 
            onClick={ () => setShowRooms( !showRooms ) } >?¿</button></div>

        {showRooms && 
          <>
           
            <ol> { listRooms.map((e,index)=>(<li  key= { index } >
                {e} </li> 
            ))} </ol> 
           
          </>
        } 
    </>
  )
}
export default Rooms;