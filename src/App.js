import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import HousesPage from "./pages/HousesPage/HousesPage";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Menu/>
          <Routes>
            <Route path="/chronology" element={<ChronologyPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/houses" element={<HousesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
