import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import HousesPage from "./pages/HousesPage/HousesPage";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import AddCharacterPage from "./pages/AddCharacterPage/AddCharacterPage";

// import CharactersDetails from "./pages/CharactersDetails/CharactersDetails";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
          <Route path="/addcharacter" element={<AddCharacterPage />} />
            <Route path="/chronology" element={<ChronologyPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            {/* <Route path="/characters/:id" element={<CharactersDetails />} /> */}
            <Route path="/houses" element={<HousesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
