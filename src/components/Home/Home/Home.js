import React from "react";
import Header from "../Header/Header";
import Partners from "../Partners/Partners";
import SampleWorks from "../SampleWorks/SampleWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Services />
      <SampleWorks />
    </div>
  );
};

export default Home;
