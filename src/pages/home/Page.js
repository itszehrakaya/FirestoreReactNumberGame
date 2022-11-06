import { useStartContext } from "context/StartContextProvider";
import JoinGamePage from "pages/join-game/JoinGamePage";
import NewGamePage from "pages/new-game/NewGamePage";
import { SingleGame } from "pages/single-game";
import HomePage from "./HomePage";

const Home = () =>  {
    const { HOME, NEW_GAME, JOIN_GAME, SINGLE } = useStartContext()
    return (
        <>
          {  HOME &&  <HomePage />  }
          {  NEW_GAME && < NewGamePage /> }
          {  JOIN_GAME && <JoinGamePage /> }
          {  SINGLE  && <SingleGame /> }
        </>
    )
}
export default Home;
