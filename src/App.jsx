import { useRecoilValue, RecoilRoot ,useRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
export default function App() {
  return (
    <div>
        <Count />
    </div>
  );
}
function Count() {
  // alert("cheack re-rendered");
  return (
    <>
      <RecoilRoot>
      <CountRenderer />
      <Buttons />
      </RecoilRoot>

    </>
  );
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <h1>{count}</h1>;
}
function Buttons() {
  const setcount = useRecoilState(countAtom);
  // alert("buttons rerendered");
  return (
    <>
      <button onClick={() => {setcount(count => count + 1)}}>Increase</button>
      <button onClick={() => {setcount(count => count - 1)}}>Decrease</button>
    </>
  );
}
