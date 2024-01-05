import { Route, Routes } from "react-router-dom";
import SignUpRoute from './routes/signup.route';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "preline/preline";
import { IStaticMethods } from "preline/preline";


function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/signup" element={<SignUpRoute />} />
    </Routes>
  );
}

export default App;
