import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <div id="main-wrapper">
      <Header></Header>
      <div id="mid-wrapper">
        <div id="content">
          <div className="under-construction">
            <span className="material-icons">construction</span>
            <p>
              Hello, unfortunately this section as well as many others are still
              under constructions but you can download my resume{" "}
              <a
                className="download-resume"
                href="public/andretuyennguyen-resume.pdf"
              >
                here!
              </a>
              !
            </p>
          </div>
          {/* <div className="profile">
            <img
              src="src/assets/profilepicture.jpg"
              alt="Profile Picture"
              className="profile-picture"
            />
            <div className="profile-education">
              <div className="school">
                <span className="material-icons">school</span>California State
                University Northridge
              </div>
              <div className="major">
                <span className="material-icons">history_edu</span>B.S Computer
                Science
              </div>
              <div className="skills">
                <span className="material-icons">account_tree</span>Skills:
                Software design and developement.
              </div>
            </div>
          </div>
          <p>
            Versatile software developer and designer, skilled in Python,
            JavaScript, React, Swift, data structure implementation and
            optimization, algorithm design and analysis, API development, UI/UX
            design, leveraging both technical and design methodologies to build
            responsive and accessible applications. finding ways to make AI more
            beneficial in our daily lives.
          </p> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AboutMe;
