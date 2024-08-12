import React from "react";
import Voucher from "../../components/Voucher/Voucher";
import Sale from "../../components/Sale/Sale";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";
import BestProducts from "../../components/BestProducts/BestProducts";
import ExploreProducts from "../../components/ExploreProducts/ExploreProducts";
import NewArrival from "../../components/NewArrival/NewArrival";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <section className="home">
      <Voucher />
      <Sale />
      <BrowseCategories />
      <BestProducts />
      <Slider />
      <ExploreProducts />
      <NewArrival />
      <Services />
    </section>
  );
}

export default Home;
