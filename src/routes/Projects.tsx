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
              under constructions! Please have a look at my&nbsp;
              <a
                className="download-resume"
                href="https://www.linkedin.com/in/andre-tuyen-nguyen-43783b299/"
              >
                LinkedIn
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
