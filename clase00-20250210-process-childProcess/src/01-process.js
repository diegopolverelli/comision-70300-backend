import fs from "fs"

console.log("cwd", process.cwd())
console.log("pid", process.pid)
console.log("platform", process.platform)

console.log("env", process.env)
console.log("PRUEBA_PORT", process.env.PRUEBA_PORT)
console.log("PRUEBA_SECRET", process.env.PRUEBA_SECRET)

console.log("argv", process.argv)