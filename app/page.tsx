import Image from "next/image";
import Homepage from "./pages/homepage"
import Education from "./pages/education"
import ForgeLab from "./pages/forgelab"
import Projects from "./pages/projects"


export default function Home() {
  return (
    <>
      <section id="homepage">
        <Homepage/>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="forgelab">
        <ForgeLab/>
      </section>
      <section id="modde">
        <Projects/>
      </section>
    </>
  );
}
