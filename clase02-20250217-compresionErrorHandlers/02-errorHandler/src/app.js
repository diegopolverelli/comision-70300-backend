import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middlewares/errorHandlers.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/heroes', heroesRouter)


app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})



app.get('/error1',(req,res)=>{
    console.log(fafafa2)

    try {
        console.log(fafafa)
        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Error... ${error.message}`})
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('ruta error 1');
})

app.get('/error2',async(req,res,next)=>{
    try {
        console.log(fafafa2)
    } catch (error) {
        // res.setHeader('Content-Type','application/json');
        // return res.status(500).json({error:`error interno con try/ catch`})
        return next(error)
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('ruta error 2');
})


app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
