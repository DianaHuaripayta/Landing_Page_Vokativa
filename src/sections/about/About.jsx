import React, { Component } from "react";
import aboutImage from "../../assets/img/about-image.jpg"; // Asegúrate de que la ruta sea correcta
import styles from "./About.module.css"; // Asegúrate de que la ruta sea correcta
export class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <div>
          <h1>Sobre nosotros</h1>
          <p>
            {" "}
            Ayudamos a jóvenes a validar sus habilidades y conocer su vocación
            en la practica.
          </p>{" "}
        </div>
        <div>
          <img
            src={aboutImage}
            alt="Sobre nosotros"
            style={{ width: "90%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>
    );
  }
}

export default About;
