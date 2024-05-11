
import { useState } from 'react';
import './App.css';

function App() {

  let [show, setShow] = useState(false);




  
  return (
    <div className="App">
      <button className="bg-black text-white rounded-md p-2 " onClick={() => setShow(!show)}>
        {(show) ? "Hide" : "Show"}  
      
      </button>
 
      {(show) ? 
        <p>Hello Vikram</p>
        :
        ""
      }
      
     
    </div>
  );
}

export default App;
