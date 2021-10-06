import React from "react";
import GlobalState from "./global/GlobalState";
import Routes from "./routes/Routes";

function App() {
  return (
    <div>
      <GlobalState>
        <Routes />
      </GlobalState>
    </div>
  );
}

export default App;
