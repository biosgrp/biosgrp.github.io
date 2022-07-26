import styled from "styled-components";

import { breakpoint } from "../breakpoints";

const AboutContainer = styled.div`
  background: linear-gradient(to right, #7fc4fd 0%, #5f8dfd 100%);
  color: #fff;
  padding: 5em 3em;
  @media ${breakpoint.md} {
    padding: 5em 8em;
  }

  margin: 7em 0 0 0;
`;
export const AboutV2 = (props) => {
  return (
    <div id="about">
      <AboutContainer>
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-3">
            <h2 className="white">About Us</h2>
          </div>
          <div className="col-12 col-md-7 col-lg-9">
            <div className="about-text">
              <p>
                Biosphere Investment Group is an angel fund based out of Seattle, WA, that invests in entrepreneurs
                focusing on the tech, life sciences, and fintech sectors.{" "}
              </p>
            </div>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};
