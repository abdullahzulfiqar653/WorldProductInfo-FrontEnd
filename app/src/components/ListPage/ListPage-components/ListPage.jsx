import MainListPage from "./MainListPage";
import PageNav from "./PageNav";
import React, { Component } from "react";

class ListPage extends Component {
  render() {
    return (
      <main className="main">
        <PageNav />
        <MainListPage />
      </main>
    );
  }
}

export default ListPage;
