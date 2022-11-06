
import { createContext, useContext, useReducer } from "react";
const StartContext = createContext();
export function useStartContext() {
    return useContext(StartContext);
}
const initialValues = {
    HOME: true,
    NEW_GAME: false,
    JOIN_GAME: false,
    SINGLE: false,
  }

const reducer  = (state, action)=>  {
  switch(action.type) {
    case "JOIN_GAME":
      return { ...state, HOME: false, JOIN_GAME: true }      
    case "NEW_GAME":
      return { ...state, HOME: false, NEW_GAME: true }
    case "SINGLE":
        return { ...state, HOME: false, SINGLE: true }
  }
  return state;
}
const StartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues); 
    const newGame =  () => {
        dispatch({ type: "NEW_GAME"}) }
    const joinGame = () => {
        dispatch({ type: "JOIN_GAME"}) }
    const singleGame = () => {
        dispatch({ type: "SINGLE"}) }
    const data = {
      ...state,
      newGame,
      joinGame,
      singleGame,
    }

    return <StartContext.Provider value={ data }>{ children }</StartContext.Provider>;
}
export { StartContextProvider, StartContext }
