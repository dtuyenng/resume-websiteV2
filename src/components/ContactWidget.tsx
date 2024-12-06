import SocialMedia from "./SocialMedia";

function ContactWidget() {
  return (
    <div className="contact-widget">
      <h5>Contact Me</h5>
      <div className="contact-info">
        <div className="menu-item-text">
          <span className="material-icons">email</span>
          <div>dtuyen.ng@gmail.com</div>
        </div>

        <div className="menu-item-text">
          <span className="material-icons">call</span>
          <div>310-598-0096</div>
        </div>

        <div className="github-link">
          <img src="src/assets/github-logo.svg" alt="" />
          <a href="https://github.com/dtuyenng">GitHub</a>
        </div>

        <div className="linkedin-link">
          <img src="src/assets/linkedin-logo.png" alt="" />
          <a href="www.linkedin.com/in/andre-tuyen-nguyen-43783b299">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactWidget;
