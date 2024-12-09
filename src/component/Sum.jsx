import { useRecoilValue } from "recoil";
import { sumSelector } from "../store/atom/list";

export default function Sum() {
  const sum = useRecoilValue(sumSelector);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Total Sum:</h2>
      <button style={{ padding: "10px 20px" }}>{sum}</button>
    </div>
  );
}