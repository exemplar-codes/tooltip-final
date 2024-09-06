// import './App.css'
import Tooltip from "./components/Tooltip.jsx";

function App() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Tooltip tooltipText="Message">
        <span style={{ border: "1px solid red" }}>Hello world</span>
      </Tooltip>
    </div>
  );
}

export default App;
