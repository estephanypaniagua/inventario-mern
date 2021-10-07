import express from "express";

const app = express();

app.use(express.json())

app.get("/", (request, response)=>{
    return response.send("Hola mundo");
})

app.post("/", (request, response)=>{
    const data = request.body;
    return response.send(data);
})

app.listen(3000, "0.0.0.0", ()=>{
    console.log("Servidor escuchando en el puerto 3000")
})