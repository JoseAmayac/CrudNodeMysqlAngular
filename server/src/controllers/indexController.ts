import { Request,Response } from 'express';

class IndexController{
    public index(req:Request,res:Response){
        res.send(res.json('API IS IN /api/games'));
    }
}

export const indexController = new IndexController();