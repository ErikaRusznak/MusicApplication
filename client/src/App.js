import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./component/AppNavbar/AppNavbar.js";
import Home from "./component/Home/Home.js";
import FirstPage from "./component/FirstPage/FirstPage.js";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

function App() {
  return (
    <div className="App">
    

      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
