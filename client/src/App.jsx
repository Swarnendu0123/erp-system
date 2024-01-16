import { Route, Routes } from "react-router-dom";
import LoginRoute from './routes/login.route';
import Home from "./routes/home.route";
import ProfileRoute from "./routes/profile.route";
import SubjectRegRoute from "./routes/subject-reg.route";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/profile" element={<ProfileRoute />} />
      <Route path="/subject-reg" element={<SubjectRegRoute />}/>
    </Routes>
  );
}

export default App;
