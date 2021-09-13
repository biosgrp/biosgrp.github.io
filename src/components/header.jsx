export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <h1>
                  {"We help visionaries"}
                  <br />
                  {"build a brighter future"}
                  <span></span>
                </h1>
                <p>We invest for monumental returns.</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
