import PageNav from './PageNav';
import React, { Component } from 'react';
import MainListPage from './MainListPage';

class ListPage extends Component {
  render() {
    return (
      <main className="main">
        <PageNav />
        <MainListPage id={this.props.id} />
      </main>
    );
  }
}

export default ListPage;
