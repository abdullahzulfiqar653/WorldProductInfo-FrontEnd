import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/NavBar/Navbar';
import ListDetails from './childs/ListDetails/listDetails';
import MainSlider from '../common/MainSlider/mainslider';

function ListPage() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <ListDetails />
      <Footer />
    </>
  );
}

export default ListPage;
