import styled from "styled-components";
import teamDetails from "../data/team.json";

const TeamContainer = styled.div`
  padding-top: 5em;
  text-align: center;
`;

const TeamHeader = styled.div`
  background: linear-gradient(to right, #7fc4fd 0%, #5f8dfd 100%);
  color: #fff;
  border-radius: 0 0 40px 40px;
  padding: 0 5em;
  margin-bottom: 2em;
  border-top: solid 1px #969696;
`;

const TeamRowContainer = styled.div`
  margin-bottom: 2em;
`;

const TeamDetails = ({ img, name, line1, line2 }) => (
  <div className="col-md-4 col-sm-12 team">
    <div className="thumbnail">
      <img src={img} alt="" className="team-img" loading="lazy" />
      <div className="caption">
        <h4>{name}</h4>
        <p>
          {line1}
          <br />
          {line2}
        </p>
      </div>
    </div>
  </div>
);

const TeamRow = ({ title, members }) => (
  <TeamRowContainer>
    <div className="d-flex justify-content-center align-items-center">
      <TeamHeader>
        <h3 className="white">{title}</h3>
      </TeamHeader>
    </div>
    <div className="row">
      {members.map((memberDetails) => (
        <TeamDetails key={memberDetails.name} {...memberDetails} />
      ))}
    </div>
  </TeamRowContainer>
);

export const Team = (props) => {
  return (
    <TeamContainer id="team">
      <div className="container-fluid">
        <div className="justify-content-center section-title">
          <h2>
            <span className="textDark">Meet </span>
            <span className="textLight">The Team</span>
          </h2>
        </div>
        <div className="justify-content-center align-items-center">
          <p className="lightBlue">We are an eclectic group with a broad range of backgrounds and networks.</p>
        </div>
        <TeamRow title="Managing Members" members={teamDetails.managingMembers} />
        <TeamRow title="Advisors" members={teamDetails.advisors} />
      </div>
    </TeamContainer>
  );
};
