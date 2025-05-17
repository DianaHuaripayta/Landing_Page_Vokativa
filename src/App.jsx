import { Routes, Route , Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import WelcomeScreen from "./pages/welcome/WelcomeScreen";
import Layout from './layout/Layout'
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
      {/* Ruta para manejar redirect de GitHub Pages */}
        <Route 
          path="/vokativa" 
          element={<Navigate to="/" replace />} 
        />
        <Route 
          path="/vokativa/*" 
          element={<Navigate to="/" replace />} 
        />
      {/* Ruta comodín para el error 404 */}
        <Route path="*" element={<NotFound />} />
    </Routes>
  </>    
  );
}

export default App;