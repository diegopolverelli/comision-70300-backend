import { fileURLToPath } from 'url';
import { dirname } from 'path';
import winston from "winston"
import { config } from './config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const nivelesPersonalizados = {
    colors: { grave: "red", warn: "yellow", info: "blue", leve: "green" },
    levels: { grave: 0, warn: 1, info: 2, leve: 3 }
}

const transporteConsola = new winston.transports.Console({
    level: "leve",
    format: winston.format.combine(
        winston.format.colorize({
            colors: nivelesPersonalizados.colors
        }),
        winston.format.timestamp(),
        winston.format.simple(),
    )
})

export const logger = winston.createLogger(
    {
        levels: { grave: 0, warn: 1, info: 2, leve: 3 },
        transports: [
            new winston.transports.File({
                level: "grave",
                filename: "./src/logs/error.log",
                format: winston.format.combine(
                    // winston.format.colorize({
                    //     colors: { grave: "red", warn: "yellow", info: "blue", leve: "green" }
                    // }),
                    winston.format.timestamp(),
                    winston.format.json(),
                )
            })
        ]
    }
)

console.log(config.MODE)
if(config.MODE=="DEV"){
    logger.add(transporteConsola)
}

export const middLogg = (req, res, next) => {
    req.logger = logger

    next()
}