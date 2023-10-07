import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Router } from "./components/router/router";
function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
