import { Request,Response } from 'express';

import pool from '../database'

class GamesController{
    public async list(req:Request,res:Response){
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO games set ?',[req.body]);
        res.json('Game saved');
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM games WHERE id= ?',[req.params.id]);
        res.json({message: ' The game was deleted'})
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE games SET ? WHERE id = ?',[req.body,req.params.id]);
        res.json('The game was updated');
    }

    public async getOne(req:Request,res:Response){
        const game =  await pool.query('SELECT * FROM games WHERE id = ?',[req.params.id]);
        if(game.length > 0){
            return res.json(game[0])
        }
        res.status(404).json({text: "The game doesn't exists"})
    }
}
export const gamesController = new GamesController();