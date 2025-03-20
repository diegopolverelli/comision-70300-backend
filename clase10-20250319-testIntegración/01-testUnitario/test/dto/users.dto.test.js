import UserDTO from "../../src/dto/User.dto.js";
import {expect} from "chai"
import { describe, it } from "mocha";

describe("Test sobre DTO de usuarios", ()=>{

    // analizar si preciso after, before, etc...

    it("Si envío un user con first_name y last_name, retorna una property name, con la concatenación de ambos", ()=>{
        let user={
            first_name:"Juan", last_name:"Paez", password:"123", role:"admin"
        }

        let resultado=UserDTO.getUserTokenFrom(user)

        expect(resultado).to.has.property("name").and.to.be.eq(`${user.first_name} ${user.last_name}`)
    })

    it("Si envío un user con edad, la propiedad edad no debe aparecer en la respuesta", ()=>{
        let user={
            first_name:"Juan", last_name:"Paez", password:"123", role:"admin", edad:23
        }

        let resultado=UserDTO.getUserTokenFrom(user)

        expect(resultado).not.to.has.property("edad")
        expect(resultado.edad).not.exist
    })

    it("Si envío un user con password, la propiedad password no debe aparecer en la respuesta", ()=>{
        let user={
            first_name:"Juan", last_name:"Paez", password:"123", role:"admin", edad:23
        }

        let resultado=UserDTO.getUserTokenFrom(user)

        expect(resultado).not.to.has.property("password")
        expect(resultado.password).not.exist
    })

})