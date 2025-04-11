import { useState } from "react";
import NavBar from "./components/NavBar";
import ClickSpark from "./reactbits/ClickSpark.jsx";
import Banner from "./components/Banner.jsx";
import PopularItems from "./components/PopularItems.jsx";

function App() {
  const backgroundImage = {
    backgroundImage: "url('/public/images/slider-eclipse.png')",
    height: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
  };

  return (
    <>
      <ClickSpark
      className=" "
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div style={backgroundImage} className=" w-screen  bg-gray-100">
          <NavBar />
          <Banner />
          
          <PopularItems/>
        </div>
        {/* Your content here */}
      </ClickSpark>
    </>
  );
}

export default App;
