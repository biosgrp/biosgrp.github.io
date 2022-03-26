import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import { breakpoint } from "../breakpoints";

const ContactContainer = styled.div`
  background: linear-gradient(to right, #7fc4fd 0%, #5f8dfd 100%);
  color: #fff;
  border-radius: 100px 100px 0 0;
  width: 100vw;

  padding: 5em 3em 3em;
  @media ${breakpoint.md} {
    padding: 5em 8em;
  }
`;

const ContactContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const ContactV2 = (props) => {
  return (
    <div id="contact">
      <ContactContainer>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4">
            <h2 className="white">Get In Touch</h2>
          </div>
          <div className="col-12 col-md-8">
            <div className="about-text">
              <ContactContent>
                <AiOutlineMail />
                <span className="contact-item">info@biosgrp.com</span>
              </ContactContent>
            </div>
          </div>
        </div>
      </ContactContainer>
    </div>
  );
};
