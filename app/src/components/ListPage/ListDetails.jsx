import Footer from "../common/Footer";
import React, { Component } from "react";
import Navbar from "../common/NavBar/Navbar";
import LastSection from "../home/LastSection";
import ListPage from "./ListPage-components/ListPage";

class ListDetails extends Component {
  render() {
    // console.log(this.props.match.params.categoryid);
    return (
      <>
        <div className="page-wrapper">
          <Navbar />
          <ListPage id={this.props.match.params.categoryid} />
          <Footer />
        </div>

        <LastSection />
      </>
    );
  }
}

export default ListDetails;
