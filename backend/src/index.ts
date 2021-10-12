import express from "express";
import { startConnection } from "./db";
import { setupRoutes } from "./routes";

//Creas aplicación
const app = express(); //usa express

//Configuración de la aplicación
app.use(express.json()); //entiende json

//Seteo de rutas
setupRoutes(app);

//Levanta la aplicación
app.listen(3000, "0.0.0.0", async () => {
    console.log("Servidor escuchando en el puerto 3000")
    await startConnection();
})