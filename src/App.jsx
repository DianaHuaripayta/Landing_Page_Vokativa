import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import WelcomeScreen from "./pages/welcome/WelcomeScreen";
import Layout from './layout/Layout'
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/" element={<Layout />}>
        
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  </>    
  );
}

export default App;