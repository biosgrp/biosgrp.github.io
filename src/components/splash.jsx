export const Splash = (props) => {
  return (
    <header id="header">
      <div className="splash-container centeredRow">
        <div className="splash-text">
          <h1>
            <span className="lightBlue">W</span>
            <span className="darkBlue">e</span>
            {" accelerate visionary"}
            <br />
            {"founders and startups"}
            <span></span>
          </h1>
          <br />
          <a href="#about" className="btn btn-custom btn-lg page-scroll">
            Learn More
          </a>{" "}
        </div>
        <img src="img/banner-1.png" className="splash-img" alt="banner" />
      </div>
    </header>
  );
};
