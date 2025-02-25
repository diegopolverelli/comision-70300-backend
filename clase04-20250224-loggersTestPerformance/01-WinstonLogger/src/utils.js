import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const filtraDebug=winston.format((log)=>{
    if(log.level=="debug"){
        log.datos="datos agregados en el filtro...!!"
        return log
    }
})


export const logger=winston.createLogger(
    {
        transports: [
            new winston.transports.Console(
                {
                    level: "info",
                    // format: winston.format.prettyPrint(),
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.timestamp(),
                        winston.format.simple() 
                    )
                }
            ),
            new winston.transports.File(
                {
                    level: "debug",
                    filename: "./src/logs/debug.log",
                    // format: winston.format.prettyPrint(),
                    format: winston.format.combine(
                        filtraDebug(),
                        // winston.format((log)=>{
                        //     if(log.level=="debug"){
                        //         log.message.toUpperCase()
                        //         return log
                        //     }
                        // })(),
                        winston.format.colorize(),
                        winston.format.timestamp(),
                        winston.format.json() 
                    )
                }
            ),
            new winston.transports.File(
                {
                    level: "warn",
                    filename: "./src/logs/error.log"
                }
            )
        ]
    }
)

export const middLogg=(req, res, next)=>{
    req.logger=logger

    next()
}

