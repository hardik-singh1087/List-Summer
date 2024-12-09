import { useRecoilValue } from "recoil";
import listAtom from "../store/atom/list";

export default function List() {
  const list = useRecoilValue(listAtom);
  return (
    <div>
      <h2>Your Current List : </h2>
      <div>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
}
