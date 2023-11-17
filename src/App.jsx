import React from "react";
import Navbar from "./components/navbar/Nav";
import Header from "./components/header/Header";
import MainCta from "./components/maincta/MainCta";
import MainInfo from "./components/maininfo/MainInfo";
import MainInfo2 from "./components/maininfo2/MainInfo2";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";



const App = () => {
  console.log('Rendering App component');

  return (
      <>
        <Navbar />
        <Header />
        <MainCta />
        <MainInfo />
        <MainInfo2 />
        <About />
        <Footer />
      </>

  );
};

export default App;
