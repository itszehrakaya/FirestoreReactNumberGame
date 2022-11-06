
import { useGame } from "context";
import useListenDoc from "hooks/useListenDoc";
import useFirestore from "hooks/useFirestore";
import { useState } from "react";


const NumbrBtns = () => {

    const [ value , setValue ] = useState("");
    const { createGuessCol } = useFirestore()
    const { roomId, playerID } =useGame()
    const  { docId } = useListenDoc(roomId)
    const handleClick = e => {setValue(value + e.target.value);}
    const delBtn = () =>{setValue(value.substring(0, value.length - 1));};
    const handleChange = e =>{setValue(e.target.value);};

    const guesses = {
        from: playerID,
        guess: value
    }
    const handleSubmit = async(e)  => {
        e.preventDefault();
        if (!value)
            return;
        setValue('');
        try {
            await createGuessCol( guesses ,docId)
        } catch (e) {
            if (e) {
                alert("this game is over you cannot play")
            }
        }
    };
    return (
        <div > 
            <div className=" btn" >
                <button  className="btn btn-outline-success" value = { 0 } onClick={ handleClick }>0</button>
                <button  className="btn btn-outline-success" value = { 1 } onClick={ handleClick }>1</button>
                <button  className="btn btn-outline-success" value = { 2 } onClick={ handleClick }>2</button>
                <button  className="btn btn-outline-success" value = { 3 } onClick={ handleClick }>3</button>
                <button  className="btn btn-outline-success" value = { 4 } onClick={ handleClick }>4</button>
                <button  className="btn btn-outline-success" value = { 5 } onClick={ handleClick }>5</button>
                <button  className="btn btn-outline-success" value = { 6 } onClick={ handleClick }>6</button>
                <button  className="btn btn-outline-success" value = { 7 } onClick={ handleClick }>7</button>
                <button  className="btn btn-outline-success" value = { 8 } onClick={ handleClick }>8</button>
                <button  className="btn btn-outline-success" value = { 9 } onClick={ handleClick }>9</button>
                <button  className="btn btn-outline-success" onClick = { delBtn }> DEL </button> 
            </div>     

            <form onSubmit={ handleSubmit } >
                <input 
                    className="btn btn-light"
                    onChange={ handleChange }
                    value={ value }
                    placeholder="Enter Your Guess"/>
                <input className="btn btn-success" value={ "Enter" }  type="submit" />   
            </form>   
          
        
    
        </div>
    );
};
export default NumbrBtns;

