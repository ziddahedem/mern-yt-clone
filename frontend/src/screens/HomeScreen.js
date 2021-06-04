import React from "react";
import Hero from "../components/Hero";
import Collection from "../components/collections/Collection";
import ProductDisplay from "../components/products/productDisplay";
import BrandSlider from "../components/BrandSlider";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Collection />
      <ProductDisplay />
      <BrandSlider />
    </>
  );
};

export default HomeScreen;
