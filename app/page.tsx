import Image from "next/image";
import Homepage from "./pages/homepage"
import Education from "./pages/education"
import ForgeLab from "./pages/forgelab"


export default function Home() {
  return (
    <>
      <section id="homepage">
        <Homepage/>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section>
        <ForgeLab/>
      </section>
    </>
  );
}
