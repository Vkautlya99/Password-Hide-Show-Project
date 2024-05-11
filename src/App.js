
import './App.css';
import weblogo from "./images/logo.png"
function App() {
  
  let display = () => {
    alert("welcome to React.js");
  }
  
  let addData = (num1, num2) => {
    alert(num1 + num2);
  }
  return (
    <div className="App">
      <img width={150} src={weblogo} alt="" />
      {/* For non-parameerized data we will not use the "()" brackets to call the function */}
      <button className="bg-green-600 rounded-md p-2 w-[60px] h-12 text-white font-bold mb-5" onClick={display}>Click</button> <br />

      {/* For parameerized data we will  use the "()" brackets to call the function */}
      <button className="bg-green-600 rounded-md p-2 w-[110px] h-12 text-white font-bold" onClick={()=>{addData(22,30)}}>Add Data</button>
    </div>
  );
}

export default App;
