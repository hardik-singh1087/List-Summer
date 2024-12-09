import { useRecoilState } from "recoil";
import listAtom from "../store/atom/list";
import { useNavigate } from "react-router-dom";

export default function Remover() {
  const navigate = useNavigate();
  const [list, setList] = useRecoilState(listAtom);

  function removeNumber(indexToRemove) {
    setList(list.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Remover</h2>
      <button
        style={{
          marginRight: "10px",
          marginBottom: "20px",
          padding: "10px 20px",
        }}
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
      <button
        style={{ marginBottom: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/adder")}
      >
        Add a Number
      </button>
      <div>
        <h1>Current List:</h1>
        {
          <ul>
            {list.map((num, index) => (
              <div key={index}>
                <span style={{ marginRight: "10px" }}>{num}</span>
                <button onClick={() => removeNumber(index)}>Remove</button>
              </div>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
