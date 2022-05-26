import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

function App() {
  const data = [
    { Tag: "FIFA", id: 1 },
    { Tag: "WARZONE", id: 2 },
    { Tag: "R6S", id: 1 },
    { Tag: "VALORANT", id: 1 },
    { Tag: "LOL", id: 1 },
  ];

  const [options] = useState(data);
  return (
    <div
      style={{
        width: "90%",
        justifyContent: "left",
        marginLeft: "250px",
        marginTop: "25px",
        display: "flex",
      }}
    >
      <div className="App">
        <Multiselect placeholder="Tags" options={options} displayValue="Tag" />
      </div>
    </div>
  );
}
export default App;
