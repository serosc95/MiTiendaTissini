import React, {useState} from 'react'
import Login from "./components/login";
import Home from "./components/home";

function App() {
  const [conected, setConected] = useState(
    window.localStorage.getItem('conected') === 'false' ? false : true
  );
  const acceder =(state)=>{
    setConected(state)
    window.localStorage.setItem('conected', state);
  }
  return (
    conected ? <Home acceder={acceder} /> : <Login acceder={acceder} /> 
  );
}

export default App;
