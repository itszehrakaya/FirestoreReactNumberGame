import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "assets/index.css";
import "assets/App.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
