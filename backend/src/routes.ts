import { Express } from "express";
 
export const setupRoutes = (app: Express) =>{
    app.get("/", (request, response)=>{
        return response.send("Hola mundo");
    })
    
    app.get("/producto", (request, response)=>{
        const data = request.body;
        return response.send(data);
    })
    
    app.get("/producto/:id", (request, response)=>{
        const id = request.params.id;
        const data = request.body;
        return response.send(data);
    })
    
    app.post("/producto", (request, response)=>{
        return response.send("Hola mundo");
    })
    
    app.put("/producto/:id", (request, response)=>{
        const data = request.body;
        return response.send(data);
    })
    
    app.delete("/producto/:id", (request, response)=>{
        return response.send("Hola mundo");
    })
}