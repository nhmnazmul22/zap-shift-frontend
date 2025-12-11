import { Fragment } from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <OurServices></OurServices>
      <Brands></Brands>
    </Fragment>
  );
};

export default Home;
