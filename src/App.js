import { Routes, Route, Link } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar.js";

/* Pages */
import Trade from "./pages/Trade.js";
import Board from "./pages/Board.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/trade" element={<Trade />}></Route>
        <Route path="/board" element={<Board />}></Route>
      </Routes>
    </div>
  );
}

export default App;
