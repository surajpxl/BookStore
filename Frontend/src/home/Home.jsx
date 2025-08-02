import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import BookDiscountBanner from "../components/BookDiscountBanner";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <BookDiscountBanner/>
      <Freebook />
      <Categories/>
      <NewArrivals/>
      <Footer />
    </>
  );
}

export default Home;
