export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Método no permitido" });
    }
  
    const { name, email, message } = req.body;
  
    try {
      // Aquí puedes conectar tu lógica de Google Sheets u otra API.
      console.log("Formulario enviado:", { name, email, message });
  
      res.status(200).json({ message: "Formulario enviado con éxito" });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      res.status(500).json({ message: "Error al enviar el formulario" });
    }
  }