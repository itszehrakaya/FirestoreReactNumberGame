import { Card } from "react-bootstrap";
import HowToPlay from "./HowToPlay";

const Layout = ({ children }) => (
    <>       
    <HowToPlay/> 
    <div className="app d-flex align-items-center justify-content-center ">
        <Card style={ { width: "50%" } }>
            <Card.Body >
                { children }
            </Card.Body>
        </Card>
    </div>
    </>
);

export default Layout;
