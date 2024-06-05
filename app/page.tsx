import Image from "next/image";
import Homepage from "./pages/homepage"
import education from "./pages/education"

export default function Home() {
  return (
    <>
      <section id="homepage">
        <Homepage/>
      </section>
      <section id="education">
        <education/>
      </section>
      
    </>
  );
}
