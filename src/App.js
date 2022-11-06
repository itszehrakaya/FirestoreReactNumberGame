import { GameProvider } from "context";
import { StartContextProvider } from "context/StartContextProvider";
import Router  from "pages/Router";
import { BrowserRouter } from "react-router-dom";
const App = () => (
    <GameProvider>
        <StartContextProvider >
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </StartContextProvider>
    </GameProvider>
);
export default App;

