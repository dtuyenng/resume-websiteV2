import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <div id="main-wrapper">
      <Header></Header>
      <div id="mid-wrapper">
        <div id="content">
          <h4>About Me</h4>
          <p>
            Hi, I’m Andre Tuyen Nguyen, a software developer from Montreal,
            Canada, now residing in Los Angeles, California. In addition to
            software development and web design, I enjoy dabbling in video game
            design, exploring 3D modeling, and finding ways to make AI more
            beneficial in our daily lives.
          </p>
          <p>
            When I’m not working, you can find me enjoying nerdy hobbies with
            friends and family, like playing board games, delving into Dungeons
            & Dragons campaigns, exploring tabletop adventures, or reading about
            science and cosmology.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AboutMe;
