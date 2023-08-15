import * as React from "react";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import Map from "../components/map";
import Divider from "../components/divider";
import Video from "../components/video";

const IndexPage = () => {
  return (
    <div class="flex justify-center">
      <div class="md:w-3/4">
        <Navbar></Navbar>
        {/* <Carousel></Carousel> */}
        <Video></Video>
        <Divider></Divider>
        <Footer></Footer>
      </div>
    </div>
    
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
