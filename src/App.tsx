import "./App.css";
import Header from "./components/Header";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
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

export default App;
