import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";

import "./homepage.css";

export default function Homepage() {
  
  return (
    <>
    <Header />
    <div className="home">
      {/* <Posts /> */}
      <SideBar />
    </div>
  </>
  );
}