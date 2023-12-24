import React from "react";
import "./App.css";
import EditSide from "./components/edit-side/EditSide";
import Resume from "./components/resume-side/Resume";

function App() {
  return (
    <div className="flex justify-center p-8">
      <EditSide />
      <Resume />
    </div>
  );
}

export default App;
