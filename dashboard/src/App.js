
import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleVinos from './components/DetalleVinos';
import Error404 from "./components/Error404"



function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/detalle-vino/:id" element={<DetalleVinos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
