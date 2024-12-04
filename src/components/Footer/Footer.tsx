import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'
import elaboratech from '../../assets/elaboratech.svg'


export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Website was made with Elaboratech
          <a
          href="https://www.linkedin.com/company/elabora-tech/posts/?feedView=all"
          target="_blank"
          rel="noreferrer"
        >
          <img src={elaboratech} alt="elaboratech" />
        </a>
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/company/vokativa-lab/about/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B51977703980&text=Hola+Vokativa+quiero+más+información"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/vokativa.la/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
