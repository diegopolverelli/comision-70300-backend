import {Command, Option} from "commander"
const programa=new Command()
programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del server").choices(["prod", "dev"]).default("dev"))

programa.parse()

const {mode} = programa.opts()

process.loadEnvFile(mode=="prod"?"./src/.env.prod":"./src/.env.dev")

export const config={
    PORT: process.env.PORT,
    SECRET: process.env.SECRET
}