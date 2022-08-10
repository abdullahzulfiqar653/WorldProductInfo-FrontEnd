import React, { Component } from "react";
import Footer from "../common/Footer";
import Navbar from "../common/NavBar/Navbar";
import LastSection from "../home/LastSection";
import ListPage from "./ListPage-components/ListPage";


class ListDetails extends Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
          <Navbar />
          <ListPage />
          <Footer />
        </div>

        <LastSection />
      </>
    );
  }
}

export default ListDetails;
