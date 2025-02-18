import os from "os"

export const argumentosHeroes=heroe=>{
    let {name, ...otros}=heroe

    return `
Se han detectado arugmentos inválidos. 
Argumentos requeridos:
    - name: type string | se recibió: ${name}
Argumentos opcionales:
    - alias, team, publisher, powers | se recibió ${JSON.stringify(otros)}

Fecha: ${new Date().toLocaleString()}
Usuarios: ${os.userInfo().username}
PC: ${os.hostname()}

`
    
}