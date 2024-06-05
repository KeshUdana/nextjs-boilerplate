import Image from "next/image";
import Homepage from "./pages/homepage"
import Education from "./pages/education"

export default function Home() {
  return (
    <>
      <section id="homepage">
        <Homepage/>
      </section>
      <section id="education">
        <Education/>
      </section>
      
    </>
  );
}
