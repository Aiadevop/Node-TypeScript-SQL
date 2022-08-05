import {Sequelize} from 'sequelize';

//nombre BD, usuario , contraseña
const db = new Sequelize('node', 'root','',{
    host: 'localhost',
    dialect: 'mysql',
    //logging: false   //si no queremos ver en consola lo que pasa en la BD
})

export default db;