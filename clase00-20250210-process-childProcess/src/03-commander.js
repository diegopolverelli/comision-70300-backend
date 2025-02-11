import {Command, Option} from "commander"

const programa=new Command()

programa.option("-p, --port <PORT>", "Puerto donde escuchará el server", 3000)
programa.option("-c, --color <COLOR>", "Color de fondo...")
programa.option("-d, --debug", "Activa mode debug")
programa.option("-h, --heroes [heroes...]", "Listado heroes")
programa.requiredOption("-t, --theme <THEME>", "Tema de fondo")
programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["prod", "dev", "test"]).default("prod"))

programa.allowUnknownOption()
programa.allowExcessArguments()
programa.parse()
const opts=programa.opts()

console.log(opts.port)
console.log(opts)
console.log(programa.args)