import { Request, Response, Router } from 'express';
import { getHeroes } from '../data/heroes';
import { HeroeInterface } from '../interfaces/HeroesInterface';
export const router=Router()

router.get('/',async(req: Request,res: Response)=>{
    let edad:number

    edad=29
    // edad=req.query.edad

    let resultado:HeroeInterface[]=await getHeroes()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({resultado})
})