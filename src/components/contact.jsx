import { AiOutlineMail } from "react-icons/ai";

export const ContactV2 = (props) => {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="centeredRow">
          <div className="col-xs-12 col-md-3">
            <h2 className="white">Get In Touch</h2>
          </div>
          <div className="col-xs-12 col-md-1" />
          <div className="col-xs-12 col-md-8">
            <div className="about-text">
              <div className="contact-content">
                <AiOutlineMail />
                <span className="contact-item">info@biosgrp.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
