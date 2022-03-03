import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Splash } from "./components/splash";
import { AboutV2 } from "./components/about";
import { Portfolio } from "./components/portfolio";
import { Team } from "./components/team";
import { ContactV2 } from "./components/contact";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true
});

const BoundingBox = ({ maxWidth, children }) => {
  return <div style={{ maxWidth }}>{children}</div>;
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="flexContentContainer">
        <BoundingBox maxWidth="85%">
          <Splash data={landingPageData.Header} />
        </BoundingBox>
        <BoundingBox maxWidth="100vw">
          <AboutV2 data={landingPageData.About} />
        </BoundingBox>
        <BoundingBox maxWidth="85%">
          <Portfolio />
        </BoundingBox>
        <BoundingBox maxWidth="85%">
          <Team data={landingPageData.Team} />
        </BoundingBox>
        <BoundingBox maxWidth="100vw">
          <ContactV2 data={landingPageData.Contact} />
        </BoundingBox>
        <BoundingBox maxWidth="100vw">
          <Footer />
        </BoundingBox>
      </div>
    </div>
  );
};

export default App;
