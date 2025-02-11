
const mode="dev"

process.loadEnvFile(mode=="prod"?"./src/.env.prod":"./src/.env.dev")

export const config={
    PORT: process.env.PORT,
    SECRET: process.env.SECRET
}