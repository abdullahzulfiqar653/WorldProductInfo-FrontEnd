import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/NavBar/Navbar';
import ListDetails from './childs/ListDetails/listDetails';

function ListPage() {
  return (
    <>
      <Navbar />
      <ListDetails />
      <Footer />
    </>
  );
}

export default ListPage;
