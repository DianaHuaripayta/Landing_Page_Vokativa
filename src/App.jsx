import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import WelcomeScreen from "./pages/welcome/WelcomeScreen";
import Layout from './layout/Layout'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  </>    
    // <Routes>
    //   <Route path="/" element={<WelcomeScreen />} />
    //   <Route element={<Layout />}>
    //     <Route path="/home" element={<Home />} />
    //   </Route>
    // </Routes>
  );
}

export default App;