import { Express } from "express";
import { Product } from "./product";
 
export const setupRoutes = (app: Express) =>{
    app.get("/", (_request, response)=>{
        return response.send("Hola mundo");
    })
    
    app.get("/producto", async(_request, response)=>{
        try {
            const allProducts = await Product.find();
            return response.json(allProducts);
        } catch (err) {
            return response.status(500).json({error: "No se pudo listar los productos"});
        }
    })
    
    app.get("/producto/:id", (request, response)=>{
        const id = request.params.id;
        const data = request.body;
        return response.send(data);
    })
    
    app.post("/producto", async (request, response)=>{
        const name = request.body.name;
        const description = request.body.description;
        const price = request.body.price;

        try {
            const newProduct = await Product.create({name: name, description: description, price: price })
            return response.json(newProduct);
        } catch (err) {
            return response.status(500).json({error: "No se pudo crear"});
        }
    })
    
    app.put("/producto/:id", (request, response)=>{
        const data = request.body;
        return response.send(data);
    })
    
    app.delete("/producto/:id", (request, response)=>{
        return response.send("Hola mundo");
    })
}