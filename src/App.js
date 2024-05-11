
import { useState } from 'react';
import './App.css';

function App() {

 
  let [password , setPassword] = useState(false)



  
  return (
    <div className="App">
     
      <input className='mt-2 bg-slate-300 p-1' type={password ? 'text' : 'password'} />
      <button className="bg-slate-900 text-white rounded-md p-1 ml-2" onClick = {() => setPassword(!password)}> {password ? "Hide" : 'Show'} </button>
      <br />
      <br />
      <br />
      <br />
    

      
      
     
    </div>
  );
}

export default App;
