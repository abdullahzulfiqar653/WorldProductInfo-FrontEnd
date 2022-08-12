import "./Navbar.css";
import UpperNav from "./UpperNav";
import MiddleNav from "./MiddleNav";
import BottomNav from "./BottomNav";
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <h1 className="d-none">GFK - Welcome to GFK Etilize</h1>
        <header className="header" id="header">
          <UpperNav />
          <MiddleNav />
          <BottomNav />
        </header>
      </>
    );
  }
}

export default Navbar;
