import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import BookDiscountBanner from "../components/BookDiscountBanner";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <BookDiscountBanner/>
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
