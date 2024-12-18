import { Sequelize } from "sequelize";

const sequelize = new Sequelize('u380600865_productos', 'u380600865_jmgv8719', 'Jmsa424b', {
    host: '62.72.50.1',
    dialect: 'mysql'
});


export default sequelize;
