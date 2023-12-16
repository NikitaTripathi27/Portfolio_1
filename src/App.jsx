
import "./App.css";
import {About} from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Experiences } from "./components/Experiences";

import NavBar from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
function App() {
  return (
    <>
      <div id="home"className="bg-purple-900 pb-28 banner ">
    <NavBar/>
    <Banner/>
    </div>
      <About/>
      <Experiences/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;
