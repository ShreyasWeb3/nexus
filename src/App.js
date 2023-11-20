import EditMember from "./components/EditMember";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SearchResults from "./components/SearchResults";
import SidePanel from "./components/SidePanel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="bg-[#EDEEF0]">
        <Header />
        <div className="flex">
          <SidePanel />
          <Routes>
            <Route path="/search" element={<SearchResults />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/editmember" element={<EditMember />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


