import { useNavigate } from "react-router-dom";
import List from "./List";
import Sum from "./Sum";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>LIST SUMMER</h1>

      <List></List>

      <div style={{ margin: "20px 0" }}>
        <button
          style={{ margin: "0 10px", padding: "10px 20px" }}
          onClick={() => navigate("/adder")}
        >
          Add a Number
        </button>

        <button
          style={{ margin: "0 10px", padding: "10px 20px" }}
          onClick={() => navigate("/remover")}
        >
          Remove a Number
        </button>
      </div>
      <Sum></Sum>
    </div>
  );
}
