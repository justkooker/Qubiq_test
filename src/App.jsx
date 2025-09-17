import React from "react";
import Main from "./pages/Main";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout children={<Main />} />
    </div>
  );
}

export default App;
