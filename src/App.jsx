import { createContext, useContext, useState} from "react";
//context API
const CountContext = createContext(0);
function App() {
  const [count,setcount] = useState(0); 
  return (
    <div>
    <CountContext.Provider value={count}>
    <Count setcount={setcount}/>
    </CountContext.Provider>
  </div>
  )
}
function Count({setcount}){
  alert("Count rerendered");
  return(
    
    <>
    <CountRenderer/>
     <Buttons setcount={setcount}/>  
    </>
  )
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