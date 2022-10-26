import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home.js";
import StartingPage from "./component/StartingPage/StartingPage.js";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import Favorites from "./screens/Favorites/Favorites.js";
import Bought from "./screens/BoughtSongs/Bought.js";
import All from "./screens/All/All.js";
import AddSong from "./screens/AddSong/AddSong.js";

function App() {
  return (
    <div className="h-auto flex items-center justify-center min-w-[680px]">
      <div>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/all" element={<All />} />
          <Route path="/bought" element={<Bought />} />
          <Route path="/addSong" element={<AddSong />} />
          {/* <Route path="/yours" element={<Yours />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
