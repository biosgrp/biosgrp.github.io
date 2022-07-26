import styled from "styled-components";
import teamDetails from "../../data/team.json";
import { TeamMember } from "./teamMember";

const TeamContainer = styled.div`
  padding-top: 5em;
  text-align: center;
`;

const TeamHeader = styled.div`
  background: linear-gradient(to right, #7fc4fd 0%, #5f8dfd 100%);
  color: #fff;
  padding: 0 3em;
  margin-bottom: 2em;
`;

const TeamRowContainer = styled.div`
  margin-bottom: 2em;
`;

const TeamRow = ({ title, members }) => (
  <TeamRowContainer>
    <div className="d-flex justify-content-center align-items-center">
      <TeamHeader>
        <h3 className="white">{title}</h3>
      </TeamHeader>
    </div>
    <div className="row">
      {members.map((memberDetails) => (
        <TeamMember key={memberDetails.name} {...memberDetails} />
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
