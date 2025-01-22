import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  const handleRedirect = () => {
    const whatsappURL = "https://api.whatsapp.com/send/?phone=%2B51977703980&text=Hola+Vokativa+quiero+más+información";
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };
  return (
    <Container id="OurWorkshops">
      <h2>Nuestros Talleres</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
            <img src="https://raw.githubusercontent.com/DianaHuaripayta/Landing_Page_Vokativa/refs/heads/styled-pages/src/assets/CienciasEmpresariales.jpg" alt="Taller de Ingeniería" />
          </header>
            <div className="body">
            <h3>Taller de Ingeniería</h3>

            <h3>Carreras profesionales:</h3>
            </div>
            <footer>
            <ul>
              <li>Ingeniería Civil</li>
              <li>Ingeniería Industrial</li>
              <li>Ingeniería Ambiental</li>
            </ul>
       
            </footer>
            <button onClick={handleRedirect} className="button">
              Quiero Inscribirme
            </button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
            <img src="https://raw.githubusercontent.com/DianaHuaripayta/Landing_Page_Vokativa/refs/heads/styled-pages/src/assets/Empresariales.jpg" alt="Taller de Ciencias Empresariales" />
          </header>
            <div className="body">
            <h3>Taller de Ciencias Empresariales</h3>

            <h3>Carreras profesionales:</h3>
            </div>
            <footer>
            <ul>
              <li>Administración de empresas</li>
              <li>Contabilidad</li>
              <li>Economía</li>
              <li>Marketing</li>
            </ul>
            </footer>
            <button onClick={handleRedirect} className="button">
              Quiero Inscribirme
            </button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
            <img src="https://raw.githubusercontent.com/DianaHuaripayta/Landing_Page_Vokativa/refs/heads/styled-pages/src/assets/tecnologia.jpg" alt="Taller de Tecnología" />
          </header>
            <div className="body">
            <h3>Taller de Tecnología</h3>

            <h3>Carreras profesionales:</h3>
            </div>
            <footer>
            <ul>
              <li>Ingeniería de Sistemas</li>
              <li>Ingeniería de Software</li>
              <li>Redes y Telecomunicaciones</li>
            </ul>
            </footer>
            <button onClick={handleRedirect} className="button">
              Quiero Inscribirme
            </button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
            <img src="https://raw.githubusercontent.com/DianaHuaripayta/Landing_Page_Vokativa/refs/heads/styled-pages/src/assets/cienciaDeLaSalud.jpg" alt="Taller de Ciencias de la Salud" />
          </header>
            <div className="body">
            <h3>Taller de Ciencias de la Salud</h3>

            <h3>Carreras profesionales:</h3>
            </div>
            <footer>
            <ul>
              <li>Medicina</li>
              <li>Enfermería</li>
              <li>Psicología</li>
              <li>Odontología</li>
            </ul>
            </footer>
            <button onClick={handleRedirect} className="button">
              Quiero Inscribirme
            </button>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}