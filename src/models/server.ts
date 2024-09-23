import express, { Application,Request, Response } from 'express'
import router from '../routes/products';
import sequelize from '../db/conn';
import cors from 'cors';


class Server{

    private port: string;
    private api: Application;

    constructor(){
        this.port = process.env.PORT ||'3001'
        this.api = express();
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnection();
    }

    listen(){
        this.api.listen( this.port, ()=>{
            console.log(`aplicacion corriendo en el puerto ${this.port}`)
        } )
    }

    router(){
        this.api.get( '/',( req:Request, res:Response )=>{
            res.json({
                msg: 'aplicacion corriendo mi compa'
            })
        } )
        this.api.use('/api/productos/', router)
    }
    
    midlewares(){
        this.api.use( express.json() )
        this.api.use( cors())
    }

    async dbConnection(){

        try {
            await sequelize.authenticate();
            console.log('base de datos conectada')
            
        } catch (error) {
            console.log(error)
            console.log( 'error en la conexion' )
        }

    }

}


export default Server;