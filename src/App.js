import React, { useState } from "react";
import "./App.css";
import Textarea from "./components/textarea.mjs";
function App() {
  let [mode, setMode] = useState("white");
  let [tex, ser] = useState("Enable Dark Mode");

  let trigger = () => {
    if (mode === "white") {
      setMode("grey");
      console.log(mode);
      document.body.style.backgroundColor = `#0B1340`;
      document.body.style.color = `white`;

      ser("Enable Light Mode");
    } else {
      setMode("white");
      //    console.log(mode)

      document.body.style.backgroundColor = `#DAD9D9`;
      document.body.style.color = `black`;

      ser("Enable Dark Mode");
    }
  };
  return (
    <>
      <Textarea
        text="Enter the words"
        mode={mode}
        title="SHAHID_TEXT-TOOLS.io"
        trigger={trigger}
        tex={tex}
      />
    </>
  );
}
export default App;
