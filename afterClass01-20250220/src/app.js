import express from 'express';
import { config } from './config/config.js';
import { connDB } from './connDB.js';
import { router as productosRouter } from './routes/productos.router.js';
import { router as sessiosRouter} from './routes/sessionsRouter.js';
import passport from 'passport';
import { inicializarPassport } from './config/passport.config.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
inicializarPassport()
app.use(passport.initialize())


app.use("/api/productos", productosRouter)
app.use("/api/sessions", sessiosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


connDB()