import { Request, Response } from "express"
import products from "../models/products"


export const getProducts = async( req: Request, res: Response )=>{

    const product = await products.findAll();

    res.json( product )

}

export const getProduct = async( req: Request, res: Response )=>{

    const {id} = req.params;
    const product = await products.findByPk(id)

    if (product) {        
        res.json({
            id,
            msg:product
        })
    } else {
        res.json({
            msg: `No existe un producto con el id ${id}`
        })
    }


}

export const deleteProduct = async( req: Request, res: Response )=>{

    const {id} = req.params;
    const product = await products.findByPk(id);

    if (product) {
        product.destroy();
        res.json({
            msg:'producto eliminado',
            product
        })
    } else {
        
        res.json({
            msg: `no existe un producto con el id ${id}`
        })
    }
    


}

export const createProduct = async( req: Request, res: Response )=>{

    const {body} = req;


    try {
        const product =await  products.create(body)
        res.json({
            msg:'producto creado',
            product
        })

    } catch (error) {
        
        res.json({
            msg:'ups algo paso'
        })
    }


}

export const updateProduct = async( req: Request, res: Response )=>{

    const {body} = req;
    const {id} = req.params;

    try {
        const product = await products.findByPk(id)
        
        if (product) {
            
            product.update( body )
            res.json({
                msg:`producto actualizado`,
                product
            })
        } else {
            res.json({
                msg:`no existe un producto con el id ${id}`
            })
        }



    } catch (error) {
        res.json({
            
            msg:'ups algo paso'
        })
    }
    

}