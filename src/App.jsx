import { useRecoilValue, RecoilRoot ,useRecoilState, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
export default function App() {
  return (
    <div>
        <Count />
    </div>
  );
}
function Count({setcount}){
  alert("Count rerendered");
  return(
    
    <>
    <CountRenderer/>
     <Buttons setcount={setcount}/>  
    </>
  );
}
function CountRenderer(){
  const  count = useContext(CountContext); 
  return (<h1>
    {count}
  </h1>
  )
}
function Buttons({setcount}){
  const count = useContext(CountContext);
  return (<> 
  <button onClick={()=>setcount(count+1)}>
    Increase
  </button>
  <button onClick={()=>setcount(count-1)}>
  Decrease
</button>
</>
  )
}
export default App;