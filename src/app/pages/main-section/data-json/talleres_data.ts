import { environment } from "../../../../environments/environment.prod";

export const TALLERES = [
  {
    nombre: 'Taller de Ingeniería',
    precio: 'S/. 25.00',
    fecha: 'Viernes 15 Noviembre',
    temas: ['Ingeniería Civil', 'Ingeniería de Sistemas', 'Ingeniería Industrial', 'Ingeniería Ambiental'],
    imagen: `${environment.assetsBasePath}ingeneria.jpg`
  },
  {
    nombre: 'Taller de Ciencias Empresariales',
    precio: 'S/. 25.00',
    fecha: 'Sábado 16 Noviembre',
    temas: ['Administración', 'Contabilidad', 'Economía', 'Marketing'],      
    imagen: `${environment.assetsBasePath} cienciasEmpresariales.jpg`
  },
  {
    nombre: 'Taller de Tecnología',
    precio: 'S/. 25.00',
    fecha: 'Domingo 17 Noviembre',
    temas: ['Ingeniería de Software', 'Redes y Telecomunicaciones', 'Inteligencia Artificial y Ciencia de Datos'],
    imagen: `${environment.assetsBasePath}Tecnologia.jpg`
  },
  {
    nombre: 'Taller de Ciencias de la Salud',
    precio: 'S/. 25.00',
    fecha: 'Sábado 16 Noviembre',
    temas: ['Medicina', 'Enfermería', 'Psicología', 'Odontología'],      
    imagen: `${environment.assetsBasePath}CienciasDeLaSalud.jpg`
  }
];
export const ImagesCorousel = [
  {
    imagen: `${environment.assetsBasePath}1-img.png`
  },
  { 
    imagen: `${environment.assetsBasePath}2-img.png`
  },
  {
    imagen: `${environment.assetsBasePath}3-img.png`
  }
];