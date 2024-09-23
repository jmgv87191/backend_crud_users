import { DataTypes } from "sequelize"
import sequelize from "../db/conn"


const products = sequelize.define('productos', {
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    stock:{
        type: DataTypes.NUMBER
    },
    
},{
    createdAt: false,
    updatedAt:false
})

export default products