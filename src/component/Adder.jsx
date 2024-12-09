import { useNavigate } from "react-router-dom";
import ListEditor from "./ListEditor";
import { useRecoilValue } from "recoil";
import listAtom from "../store/atom/list";

export default function Adder() {
  const navigate = useNavigate();
  const list = useRecoilValue(listAtom);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Adder</h1>
      <button
        style={{marginRight: "10px", marginBottom: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
      <button
        style={{ marginBottom: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/remover")}
      >
        Remove a Number
      </button>
      <div>
        <h2>Current List:</h2>
        <div>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      </div>
      <ListEditor />
    </div>
  );
}
