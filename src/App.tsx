import React, { Component } from "react";
import Leftmenu from "./components/Leftmenu/Leftmenu";
import Right from "./components/Right/Right";

class App extends Component {
  render() {
    return (
      <>
        <Leftmenu />
        <Right />
        <>some changes</>
      </>
    );
  }
}

export default App;
