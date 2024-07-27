import { useRecoilValue, RecoilRoot , useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
export default function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
        </RecoilRoot>
    </div>
  );
}
function Count(){
  // alert("Count rerendered");
  return(
    <>
    <CountRenderer/>
     <Buttons />
    </>
  );
}
function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return (<>
  <h1>
    {count}
  </h1>
  <EvenRendered/>
  </>
  )
}
function Buttons(){
  const setcount = useSetRecoilState(countAtom);
  return (<> 
  <button onClick={()=>setcount(count => count+1)}>
    Increase
  </button>
  <button onClick={()=>setcount(count => count-1)}>
  Decrease
</button>
</>
  )
}
function EvenRendered(){
  const isEven = useRecoilValue(evenSelector);
  return <h2>
    {(!isEven)?" it is even":"it is odd"}
  </h2>
}
