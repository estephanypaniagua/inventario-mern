import { connect } from "mongoose";

// const URI = "tipo_db://user:password@host:puerto/database";
// const URI = "tipo_db://host:puerto/database";
const URI = "mongodb://localhost:5001/test";

export const startConnection = async () => {
    try {
        await connect(URI);
        console.log("Conexion con la base de datos exitosa");    
    } catch (er) {
        console.log("Error con la base de datos");
    }
};