import "./App.css";

import FlyPage from "./pages/FlyPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidenav from "./components/Navigation/Sidenav";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="flies" element={<FlyPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
