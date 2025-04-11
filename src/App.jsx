import { useState } from "react";
import NavBar from "./components/NavBar";
import ClickSpark from "./reactbits/ClickSpark.jsx";
import Banner from "./components/Banner.jsx";

function App() {
  const backgroundImage = {
    backgroundImage: "url('/public/images/slider-eclipse.png')",
    height: "100vh",
    width: "100vw",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
  };

  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div style={backgroundImage} className=" w-full bg-gray-100">
          <NavBar />
          <Banner />
        </div>
        {/* Your content here */}
      </ClickSpark>
    </>
  );
}

export default App;
