"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//nombre BD, usuario , contraseña
const db = new sequelize_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false   //si no queremos ver en consola lo que pasa en la BD
});
exports.default = db;
//# sourceMappingURL=connection.js.map