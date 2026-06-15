import Jitu from "./Jitu";
import Login from "./Login";
import Api from "./Api";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      
     
      <Route path="/" element={<Jitu />} />
       <Route path="/login" element={<Login />} />
        <Route path="/api" element={<Api/>} />
    </Routes>
  );
}
export default App;