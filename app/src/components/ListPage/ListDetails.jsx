import Footer from "../common/Footer";
import React, { Component } from "react";
import Navbar from "../common/NavBar/Navbar";
import ListPage from "./ListPage-components/ListPage";

class ListDetails extends Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
          <Navbar />
          <ListPage id={this.props.match.params.categoryid} />
          <Footer />
        </div>
      </>
    );
  }
}

export default ListDetails;
