import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import NavBar from "./components/navbar";
import CreateAvatar from "./pages/create-avatar";
import InfoAccount from "./pages/info-account";
import Market from "./pages/market/index.jsx";

function App() {
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Market />}/>
        <Route exact path="/create-avatar" element={<CreateAvatar />}/>
        <Route exact path="/info-account" element={<InfoAccount />}/>
      </Routes>
    </Router>
  );
}

export default App;
