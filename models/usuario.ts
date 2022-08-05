import { DataTypes } from "sequelize";
import db from "../db/connection";
import Server from "./server";


const Usuario = db.define('Usuario',{
    nombre:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.BOOLEAN //debería ser tinyint, pero ya me lo traduce ts 
    }
});

export default Usuario;