import express from 'express';
import { saludo2 } from '04-npmmodulos';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    saludo2(`Server escuchando en puerto ${PORT}`);
});
