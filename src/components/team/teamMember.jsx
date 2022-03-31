import { ImLinkedin } from "react-icons/im";
import styled from "styled-components";

const TeamImage = styled.img`
  width: 50%;
  border-radius: 100%;
`;

const Thumbnail = styled.div`
  background: transparent;
  border: 0;
`;

const Name = styled.h4`
  margin: 5px 0;
`;

const Caption = styled.div`
  padding: 10px 0 0;
  color: #888;
`;

const ReactIconLink = ({ children, href }) => (
  <div className="ps-1">
    <a
      className="d-flex align-items-center justify-content-center"
      target="_blank"
      rel="noreferrer"
      href={href}
      style={{ paddingBottom: "2px" }}
    >
      {children}
    </a>
  </div>
);

export const TeamMember = ({ img, name, line1, line2, linkedin }) => (
  <div className="col-md-4 col-sm-12 team">
    <Thumbnail>
      <TeamImage src={img} alt="" loading="lazy" />
      <Caption>
        <div className="d-flex align-items-center justify-content-center">
          <Name>{name}</Name>
          {linkedin && (
            <ReactIconLink href={linkedin}>
              <ImLinkedin size="1.25rem" />
            </ReactIconLink>
          )}
        </div>
        <p>
          {line1}
          <br />
          {line2}
        </p>
      </Caption>
    </Thumbnail>
  </div>
);
