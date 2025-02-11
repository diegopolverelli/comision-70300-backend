// process.loadEnvFile("./src/.env")
import dotenv from "dotenv"

dotenv.config({
    path:"./src/.env", override: true
})

export const config={
    PORT: process.env.PORT || 8080,
    SECRET: process.env.SECRET
}

