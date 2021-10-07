const NavbarBrand = (props) => {
  return (
    <div className="nav-brand-container">
      <a href="#page-top">
        <div className="nav-brand-text-container">
          <div className="nav-brand serif">BIOSPHERE</div>
          <div className="nav-brand2 serif">
            <span className="lightColor">Investment</span> <span className="darkColor">Group</span>
          </div>
        </div>
      </a>
      <img src="img/logov2.png" className="nav-brand-img" width="40px" />
    </div>
  );
};

const NavLinks = (props) => {
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right serif">
        <li>
          <a href="#about" className="nav-item page-scroll">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav-item page-scroll">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a href="#team" className="nav-item page-scroll">
            TEAM
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-item page-scroll">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
          </button>
          <NavbarBrand />{" "}
        </div>

        <NavLinks />
      </div>
    </nav>
  );
};
