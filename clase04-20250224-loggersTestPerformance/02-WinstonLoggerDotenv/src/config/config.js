process.loadEnvFile("./src/.env")

export const config={
    PORT:process.env.PORT || 3007,
    MODE: process.env.MODE || "DEV"
}