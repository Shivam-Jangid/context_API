import { useRecoilValue, RecoilRoot ,useRecoilState, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
export default function App() {
  return (
    <div>
        <Count />
    </div>
  );
}
function Count() {
  // alert("cheack   re-rendered");
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
  return <>
  <h1>{count}</h1>
  <EvenCountRenderer/>
  </>
  ;

}
function Buttons() {
  // const [count,setcount] = useRecoilState(countAtom);
  const setcount = useSetRecoilState(countAtom);
  // alert("buttons rerendered");
  return (
    <>
      <button onClick={() => {setcount(count => count + 1)}}>Increase</button>
      <button onClick={() => {setcount(count => count - 1)}}>Decrease</button>
    </>
  );
}
function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return <>
  <h2>
    {!isEven? "it is even":"it is odd"}
  </h2>
  </>
}
