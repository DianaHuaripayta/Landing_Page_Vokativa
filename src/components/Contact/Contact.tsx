import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";


export function Contact(){

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors]:any = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let errors:any= {};

    if (!form.name || form.name.length < 3) {
      errors.name = "El nombre es obligatorio y debe tener al menos 3 caracteres.";
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Debe ser un correo electrónico válido.";
    }
    if (!form.message || form.message.length < 10) {
      errors.message = "El mensaje es obligatorio y debe tener al menos 10 caracteres.";
    }

    return errors;
  };

  const handleSubmit = async (e:any) => {
    const CONNECTION_URL:string = "https://api.sheetbest.com/sheets/b836ac35-20d7-483a-87b7-f714715beba0";

    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(CONNECTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
      //  alert("Formulario enviado con éxito");
        setForm({ name: "", email: "", message: "" });
      } else {
        //alert("Error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return(
    <Container id="contact">
       <div>
      < header>
      <ScrollAnimation animateIn="fadeInLeft">
      <h2>Obtén Más Información</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
        <p>
          ¿Listo para dar el primer paso hacia tu futuro profesional?
        </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <p>Contáctanos para obtener más información.</p>
        </ScrollAnimation>
      </ header>
      <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
      <form
        onSubmit={handleSubmit}
        className="container-form"
      >
        <div className="content-form">
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="input-styled"
            />
            {errors.name && <p >{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="input-styled"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && <p >{errors.email}</p>}
          </div>
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."        
        ></textarea>
        {errors.message && <p>{errors.message}</p>}
        <button
          type="submit"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
          </ScrollAnimation>
              

    </div>
    </Container>
  )
}