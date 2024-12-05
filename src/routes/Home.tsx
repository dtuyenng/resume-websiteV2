import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

function Home() {
  return (
    <div id="main-wrapper">
      <Header></Header>
      <div id="mid-wrapper">
        <Content></Content>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Home;
