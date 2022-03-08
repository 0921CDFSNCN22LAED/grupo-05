
import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleVinos from './components/DetalleVinos';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/detalle-vino/:id" element={<DetalleVinos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
