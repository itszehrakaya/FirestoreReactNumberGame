import Layout  from "components/Layout";
import { Route, Routes } from "react-router-dom";
import Game from "./game/Game";
import Home from "./home/Page";

const Router = () =>  (
        <Layout>
            <Routes> 
                <Route index element={ <Home /> } />
                <Route path=":ID" element={<Game />} />
            </Routes>
        </Layout>

) 

export default Router;
