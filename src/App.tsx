import React, { Component } from "react";
import Leftmenu from "./components/Leftmenu/Leftmenu";
import Right from "./components/Right/Right";
import Navigation from "./components/Leftmenu/Navigation/Navigation";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Leftmenu />

        <Right />
      </>
    );
  }
}

export default App;
