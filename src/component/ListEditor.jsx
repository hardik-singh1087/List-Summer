import { useRecoilState } from "recoil";
import listAtom from "../store/atom/list";
import { useState } from "react";

export default function ListEditor() {
  const [list, setList] = useRecoilState(listAtom);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    const num = Number(inputValue);
    if (!isNaN(num)) {
      setList([...list, num]);
      setInputValue("");
    } else {
      alert("Please enter a valid number!");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter a number"
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleAdd} style={{ padding: "5px 10px" }}>
        Add to List
      </button>
    </div>
  );
}
