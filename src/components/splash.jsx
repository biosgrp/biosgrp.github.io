import styled from "styled-components";

const SplashContainer = styled.div`
  margin: 12rem 0 0;
`;

const SplashImg = styled.img`
  width: 40%;
  padding-left: 2em;
`;

export const Splash = () => {
  return (
    <header id="header">
      <SplashContainer className="splash-container d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>
            <span className="lightBlue">W</span>
            <span className="darkBlue">e</span>
            {" accelerate visionary"}
            <br />
            {"founders and startups"}
            <span></span>
          </h1>
          <br />
          <a href="#about" className="btn btn-custom btn-lg">
            Learn More
          </a>{" "}
        </div>
        <SplashImg src="img/banner-1.png" className="d-none d-md-block" alt="banner" />
      </SplashContainer>
    </header>
  );
};
