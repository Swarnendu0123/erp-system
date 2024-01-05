import { Route, Routes } from "react-router-dom";
import SignUpRoute from './routes/signup.route';


function App() {

  return (
    <Routes>
      <Route path="/signup" element={<SignUpRoute />} />
    </Routes>
  );
}

export default App;
