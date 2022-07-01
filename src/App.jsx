import React from "react";
import Texto from "./Texto";

function App() {
  if ("ethereum" in window) {
    console.log("navegador compatible");
  } else {
    alert("Instala Metamask");
  }

  return (
    <div className="App">
      <Texto></Texto>
    </div>
  );
}

export default App;
