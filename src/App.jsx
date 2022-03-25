import { Navigation } from "./components/navigation";
import { Splash } from "./components/splash";
import { AboutV2 } from "./components/about";
import { Portfolio } from "./components/portfolio";
import { Team } from "./components/team";
import { ContactV2 } from "./components/contact";
import { Footer } from "./components/footer";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true
});

const BoundingBox = ({ maxWidth, children }) => {
  return <div style={{ width: "100%", maxWidth }}>{children}</div>;
};

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <BoundingBox maxWidth="85%">
          <Splash />
        </BoundingBox>
        <BoundingBox maxWidth="100vw">
          <AboutV2 />
        </BoundingBox>
        <BoundingBox maxWidth="100vw">
          <Portfolio />
        </BoundingBox>
        <BoundingBox maxWidth="85%">
          <Team />
        </BoundingBox>
        <BoundingBox maxWidth="100vw">
          <ContactV2 />
        </BoundingBox>
        <BoundingBox maxWidth="100vw">
          <Footer />
        </BoundingBox>
      </div>
    </div>
  );
};

export default App;
