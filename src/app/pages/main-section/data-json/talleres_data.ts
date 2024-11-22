import { environment } from "../../../../environments/environment.prod";

export const TALLERES = [
  {
    nombre: 'Taller de Ingeniería',
    precio: 'S/. 25.00',
    fecha: 'Viernes 15 Noviembre',
    temas: ['Ingeniería Civil', 'Ingeniería Industrial', 'Ingeniería Ambiental'],
    imagen: `${environment.assetsBasePath}ingeneria.jpg`
  },
  {
    nombre: 'Taller de Ciencias Empresariales',
    precio: 'S/. 25.00',
    fecha: 'Sábado 16 Noviembre',
    temas: ['Administración de empresas', 'Contabilidad', 'Economía', 'Marketing'],      
    imagen: `${environment.assetsBasePath} cienciasEmpresariales.jpg`
  },
  {
    nombre: 'Taller de Tecnología',
    precio: 'S/. 25.00',
    fecha: 'Domingo 17 Noviembre',
    temas: ['Ingeniería de Sistemas','Ingeniería de Software', 'Redes y Telecomunicaciones'],
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
    imagen: `${environment.assetsBasePath}1-img.png`,
    id: "slide-1",
  },
  { 
    imagen: `${environment.assetsBasePath}2-img.png`,
    id: "slide-2",
  },
  {
    imagen: `${environment.assetsBasePath}3-img.png`,
    id: "slide-3",
  }
];