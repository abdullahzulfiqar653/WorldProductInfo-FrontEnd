import PageNav from "./PageNav";
import React, { Component } from "react";
import MainListPage from "./MainListPage";

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
