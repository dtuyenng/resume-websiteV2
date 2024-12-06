import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div id="main-wrapper">
      <Header></Header>
      <div id="mid-wrapper">
        <div id="content">
          <h4>Hello!</h4>
          <p>
            My name is Andre, I’m a software developer and designer who loves
            blending coding with creativity. I enjoy creating clean,
            user-friendly designs and building software that’s both functional
            and enjoyable to use. Whether I’m writing code or designing an
            interface, I focus on making things intuitive and easy for people.
            I’m all about crafting great experiences, combining my technical
            skills and creative ideas to bring them to life.
          </p>
          <p>
            While you're here, you can check out my recent projects to see what
            I'm up to or learn more about me by clicking here. You can also
            check all my social pages on the right side. If you need to reach
            me, please don’t hesitate—I'm just a phone or email away.
          </p>

          <p>Andre Tuyen Nguyen</p>
        </div>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Home;
