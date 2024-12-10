import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div id="main-wrapper">
      <Header></Header>
      <div id="mid-wrapper">
        <div id="content">
          <h4>Recent Projects</h4>
          <div className="under-construction">
            <span className="material-icons">construction</span>
            <p>
              Hello, unfortunately this section as well as many others are still
              under constructions but you can download my resume{" "}
              <a
                className="download-resume"
                href="/andretuyennguyen-resume.pdf"
              >
                here!
              </a>
              !
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Projects;
