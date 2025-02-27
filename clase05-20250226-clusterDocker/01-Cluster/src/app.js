import express from 'express';
import { router as pruebasRouter } from './routes/pruebaRouter.js';
import cluster from "cluster"
import os from "os"

// console.log(os.cpus())
// console.log("Cantidad núcleos:", os.cpus().length)

if(cluster.isPrimary){
    console.log(`Proceso primario | generando workers:`)
    for(let i=0; i<os.cpus().length; i++){
        cluster.fork()
    }

    cluster.on("message", (worker, message)=>{
        // algo...
    })

    cluster.on("disconnect", worker=>{
        console.log(`Se ha desconectado el proceso con pid ${worker.process.pid} - worker n° ${worker.id}; generando nuevo worker...!!!`)
        cluster.fork()
    })

}else{
    const PORT=3000;

    const app=express();
    
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.use("/", pruebasRouter)
    
    let visitas=0
    app.get('/',(req,res)=>{
        visitas++
        res.setHeader('Content-Type','text/plain');
        res.status(200).send(`Visitas: ${visitas}`);
    })
    
    const server=app.listen(PORT,()=>{
        console.log(`Server escuchando en puerto ${PORT} - pid: ${process.pid} - worker n°: ${cluster.worker.id}`);
    });
    
}
