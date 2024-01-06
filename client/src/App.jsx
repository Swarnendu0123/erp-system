import { Route, Routes } from "react-router-dom";
import LoginRoute from './routes/login.route';
import Home from "./routes/home.route";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRoute />} />
    </Routes>
  );
}

export default App;
