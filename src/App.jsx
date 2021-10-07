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

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="flexContentContainer">
        <div className="contentContainer">
          <Splash data={landingPageData.Header} />
          <AboutV2 data={landingPageData.About} />
          <Portfolio />
          <Team data={landingPageData.Team} />
          <ContactV2 data={landingPageData.Contact} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
