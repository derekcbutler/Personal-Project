import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import routes from "./routes";
import Nav from "./Components/Customer/Nav/Nav";

function App() {
  return (
    // <Provider>
    <HashRouter>
      <div className="App">
        <Nav />
        {routes}
      </div>
    </HashRouter>
    // </Provider>
  );
}

export default App;
