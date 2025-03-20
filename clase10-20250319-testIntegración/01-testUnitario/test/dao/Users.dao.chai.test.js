import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
// import Assert from "assert"
import {expect, should} from "chai"
import {describe, it} from "mocha"

should()

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comis70300clase09')
    // console.log("db online")
} catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit()
}

const daoUsers=new Users()

// const assert=Assert.strict

describe("Testing sobre el DAO de users usando CHAI", function(){
    // 2 seg. timeout
    this.timeout(5000) 

    // before(), after(), beforeEach(), y afterEach()
    afterEach(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test20250317@test.com"})
    })

    it("El dao retorna un arreglo de usuarios al ejecutar el método get", async()=>{
        let resultado=await daoUsers.get()
        // resultado=5

        // assert.equal(Array.isArray(resultado), true)
        expect(Array.isArray(resultado)).to.be.true
        expect(Array.isArray(resultado)).to.be.equal(true)
        if(Array.isArray(resultado) && resultado.length>0){
            // console.log("ingresa al if")
            // assert.ok(resultado[0]._id)
            expect(resultado[0]._id).to.exist
            expect(resultado[0]).to.have.property("_id")
            // assert.ok(resultado[0].email)
            expect(resultado[0]).to.has.property("email")

            // assert.ok(resultado[0].estatura)
        }
    })

    it("El dao en su método save, permite dar de alta un usuario en DB", async()=>{
        let userMock={
            first_name:"Juan", 
            last_name:"Test", 
            email: "test20250317@test.com",
            password:"123"
        }

        // consultar antes a DB para corroborar que no exista un user con 
        // email = test20250317@test.com
        let resultado
        resultado=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // assert.equal(resultado, null)
        expect(resultado).to.be.eq(null)
        expect(resultado).to.be.null

        resultado=await daoUsers.save(userMock)
        // console.log(resultado)

        // assert.ok(resultado._id)
        expect(resultado._id).to.exist
        expect(resultado._id).to.be.ok

        resultado._id.should.be.exist
        resultado.should.has.property("_id")

        // assert.equal(isValidObjectId(resultado._id), true)
        expect(isValidObjectId(resultado._id)).to.be.true
        // assert.ok(resultado.email)
        expect(resultado).to.has.property("email").and.to.be.eq(userMock.email)
        // assert.equal(resultado.email, userMock.email)
        expect(resultado.email).to.be.eq(userMock.email)
        
        resultado=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // assert.ok(resultado._id)
        expect(resultado).to.has.property("_id")
        // console.log(resultado)
    })

    it("El dao con su método save, genera un usuario con una property pets, de tipo array, vacío por default", async()=>{
        let userMock={
            first_name:"Juan", 
            last_name:"Test", 
            email: "test20250317@test.com",
            password:"123"
        }

        let resultado=await daoUsers.save(userMock)
        // assert.ok(resultado.pets)
        expect(resultado.pets).to.be.ok
        // assert.equal(Array.isArray(resultado.pets), true)
        expect(Array.isArray(resultado.pets)).to.be.true
        // assert.equal(resultado.pets.length, 0)
        expect(resultado.pets.length).to.be.eq(0)
        expect(resultado.pets).to.be.empty

        // assert.equal(3, 3)
    })
})


