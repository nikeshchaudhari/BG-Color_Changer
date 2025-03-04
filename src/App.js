import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");
  return (
    <div
      className="container-fluid vh-100 w-100 "
      style={{ backgroundColor: color }}
    >
      <div className=" d-flex  rounded-pill">
        <div className="d-flex flex-grow-1 justify-content-center align-items-center  flex-wrap gap-1 mx-4 mt-5 ">
          <button
            onClick={() => setColor("red")}
            className=" px-4 py-2 rounded-circle focus-ring"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className=" px-4 py-2 rounded-circle focus-ring"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            yellow
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className=" px-4 py-2 rounded-circle focus-ring"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className=" px-4 py-2 rounded-circle focus-ring"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className=" px-4 py-2 rounded-circle focus-ring"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("skyblue");
            }}
            className=" px-4 py-2 rounded-circle focus-ring"
            style={{ backgroundColor: "skyblue", color: "white" }}
          >
            skyblue
          </button>
          <button
            onClick={() => {
              setColor("royalblue");
            }}
            className=" px-4 py-2 rounded-circle focus-ring"
            style={{ backgroundColor: "royablue", color: "white" }}
          >
            Royablue
          </button>
          <button onClick={()=>{setColor("green")}}className=" px-4 py-2 rounded-circle focus-ring"
            style={{ backgroundColor: "green", color: "white" }}>Green</button>
          <button onClick={()=>{setColor("#AC1D1B")}}className=" px-4 py-2 rounded-circle focus-ring"
          style={{ backgroundColor: "#AC1D1B ", color: "white" }}>Casual Red Color
</button>
<button onClick={()=>{setColor("#B4D1D0")}}className=" px-4 py-2 rounded-circle focus-ring"
          style={{ backgroundColor: "#B4D1D0 ", color: "white" }}>Transparent Cyan Color

</button>
        </div>
      </div>
    </div>
  );
};
export default App;
