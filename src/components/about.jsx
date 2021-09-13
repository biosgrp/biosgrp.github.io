export const About = (props) => {
  return (
    <div id="about" className="page">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Biosphere Investment Group is an angel fund based out of Seattle, WA, that invests in entrepreneurs
                focusing on the tech, life sciences, and fintech sectors.{" "}
              </p>
              <h3>Portfolio</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>Aescula</ul>
                  <ul>BlueCargo</ul>
                  <ul>Dropleaf</ul>
                  <ul>Jido Maps</ul>
                  <ul>Lotus Pay</ul>
                  <ul>MyStacks</ul>
                  <ul>Original Tech</ul>
                  <ul>PB Tech</ul>
                  <ul>Rain Neuromorphics</ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>Retool</ul>
                  <ul>Taqtile</ul>
                  <ul>Templarbit</ul>
                  <ul>Tesseract Space</ul>
                  <ul>Tpaga</ul>
                  <ul>Sigma Genetics</ul>
                  <ul>Vathys</ul>
                  <ul>Vena Medical</ul>
                  <ul>VitroLabs</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
