

import { Button, Form } from "react-bootstrap";
import { useGame } from "context";
import useFirestore from "hooks/useFirestore";
import { useEffect } from "react";
import useListenDoc from "hooks/useListenDoc";

const RoomIdConfig = ()=> {
    const { waiting, setWaiting} = useGame()
    const { setRoomId, roomId, setDigits,  } = useGame()
    const { docId } = useListenDoc(roomId)
    const { roomConfig , getRoomItems} = useFirestore()
    useEffect(() => {
        if (docId) {
            getRoomItems(docId)
            .then(room => {
                if (room.exists) {
                  setDigits(room.data().digits)
                  ;}}) }
    },[docId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await roomConfig(docId)

       //check whether there is such room or not same as the input value 
        
    };
    return ( 
        <div>  
            <Form onSubmit={ handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label> Room Code: </Form.Label>
                    <Form.Control 
                        required autoComplete="off" 
                        placeholder="Enter Room Code"
                        value={ roomId }
                        onChange={ (e) => setRoomId( e.target.value ) }/>
                    <Button type="submit" > Join Room </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default RoomIdConfig;