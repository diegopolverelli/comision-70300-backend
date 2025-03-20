import { createHash } from "../../src/utils/index.js";
import {expect} from "chai"
import { describe, it } from "mocha";

describe("Pruebas funciones de hash", ()=>{
    
    // analizar si preciso after, before, etc...

    it("Si envío un dato en texto plano, retorna un dato diferente", async()=>{
        let password="CoderCoder123"

        let resultado=await createHash(password)

        expect(resultado).not.to.be.eq(password)
    })

    it("Si envío un dato en texto plano, retorna un dato de tamaño mayor a 20", async()=>{
        let password="CoderCoder123"

        let resultado=await createHash(password)

        expect(resultado.length).to.be.greaterThan(20)
    })

    it("Si envío un dato en texto plano, retorna un dato hasheado con algoritmo bcrypt", async()=>{
        let password="CoderCoder123"

        let resultado=await createHash(password)

        expect(resultado.slice(0,4)).to.be.eq("$2b$")
    })
})
