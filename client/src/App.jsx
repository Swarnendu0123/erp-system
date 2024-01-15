import { Route, Routes } from "react-router-dom";
import LoginRoute from './routes/login.route';
import Home from "./routes/home.route";
import ProfileRoute from "./routes/profile.route";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/profile" element={<ProfileRoute />} />
    </Routes>
  );
}

export default App;
