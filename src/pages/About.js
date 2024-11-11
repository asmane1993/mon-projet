import Skills from "../components/Skills";
import Clients from "../components/Clients";
import Services from "../components/Services";

function About() { 

  return (
    <section className="background-dark" id="about">
      <div className="container text-white py-5">
        <Skills/>
        <Clients/>  
        <Services/>
      </div>
    </section>
  );
}

export default About;
