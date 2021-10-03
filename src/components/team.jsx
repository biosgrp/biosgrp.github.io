export const Team = (props) => {
  return (
    <div id="team" className="page text-center">
      <div className="container">
        <div className="center section-title">
          <h2>Meet the Team</h2>
        </div>
        <div className="center row">
          <p>We're an eclectic group with a broad range of backgrounds and networks.</p>
        </div>
        <div className="center row">
          <h3>Managing Members</h3>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 team">
            <div className="thumbnail">
              <img src={"img/team/csun.png"} alt="" className="team-img" />
              <div className="caption">
                <h4>{"Conrad Sun"}</h4>
                <p>
                  {"Designer, 4IR & Industrial tech"}
                  <br />
                  {"Founder @ PRJCT 428, Magnetic Textile patent"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 team">
            <div className="thumbnail">
              <img src={"img/team/egoh.jpg"} alt="" className="team-img" />
              <div className="caption">
                <h4>{"Ethan Goh"}</h4>
                <p>
                  {"Engineer, Investor"}
                  <br />
                  {"Ex-Lyft, Ex-Microsoft"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 team">
            <div className="thumbnail">
              <img src={"img/team/01.jpg"} alt="" className="team-img" />
              <div className="caption">
                <h4>{"Sen Wei Lu"}</h4>
                <p>
                  {""}
                  <br />
                  {"Startup Consultant, Investor"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="center row">
          <h3>Advisors</h3>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 team">
            <div className="thumbnail">
              {" "}
              <img src={"img/team/cbentivenga.jpg"} alt="" className="team-img" />
              <div className="caption">
                <h4>{"Chris Bentivenga"}</h4>
                <p>
                  {"UX and Growth Engineer"}
                  <br />
                  {"Ex-Lyft, Ex-Microsoft."}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 team">
            <div className="thumbnail">
              {" "}
              <img src={"img/team/01.jpg"} alt="" className="team-img" />
              <div className="caption">
                <h4>{"John Chang"}</h4>
                <p>{"."}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 team">
            <div className="thumbnail">
              {" "}
              <img src={"img/team/xurui.jpg"} alt="" className="team-img" />
              <div className="caption">
                <h4>{"Xu Rui"}</h4>
                <p>
                  {"Product Manager @ Stripe"}
                  <br />
                  {"Real Estate, Ex-Microsoft"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};