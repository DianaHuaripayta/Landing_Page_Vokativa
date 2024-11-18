import { environment } from "../../../../environments/environment.prod";

export const TALLERES = [
    {
      nombre: 'Taller de Ingeniería',
      precio: 'S/. 25.00',
      fecha: 'Viernes 15 Noviembre',
      temas: ['Ingeniería Civil', 'Ingeniería de Sistemas', 'Ingeniería Industrial', 'Ingeniería Ambiental'],
      imagen: `${environment.assetsBasePath}undraw_credit_card_payment_re_o911 1.png`
    },
    {
      nombre: 'Taller de Ciencias Empresariales',
      precio: 'S/. 25.00',
      fecha: 'Sábado 16 Noviembre',
      temas: ['Administración', 'Contabilidad', 'Economía', 'Marketing'],      
      imagen: `${environment.assetsBasePath}undraw_doctors_p6aq 1.png`
    },
    {
      nombre: 'Taller de Tecnología',
      precio: 'S/. 25.00',
      fecha: 'Domingo 17 Noviembre',
      temas: ['Ingeniería de Software', 'Redes y Telecomunicaciones', 'Inteligencia Artificial y Ciencia de Datos'],
      imagen: `${environment.assetsBasePath}undraw_engineering_team_a7n2 1.png`
    },
    {
      nombre: 'Taller de Ciencias de la Salud',
      precio: 'S/. 25.00',
      fecha: 'Sábado 16 Noviembre',
      temas: ['Medicina', 'Enfermería', 'Psicología', 'Odontología'],      
      imagen: `${environment.assetsBasePath}undraw_pair_programming_re_or4x 1.png`
    }
  ];