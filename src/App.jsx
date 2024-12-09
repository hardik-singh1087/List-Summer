import Adder from "./component/Adder";
import Remover from "./component/Remover";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/adder" element={<Adder></Adder>}></Route>
        <Route path="/remover" element={<Remover></Remover>}></Route>
      </Routes>
    </div>
  );
}

export default App;
