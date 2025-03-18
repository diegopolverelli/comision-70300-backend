import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import Assert from "assert"
import {describe, it} from "mocha"

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comis70300clase09')
    // console.log("db online")
} catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit()
}

const daoUsers=new Users()

const assert=Assert.strict

describe("Testing sobre el DAO de users", function(){
    // 2 seg. timeout
    this.timeout(5000) 

    // before(), after(), beforeEach(), y afterEach()
    afterEach(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test20250317@test.com"})
    })

    it("El dao retorna un arreglo de usuarios al ejecutar el método get", async()=>{
        let resultado=await daoUsers.get()
        // resultado=5

        assert.equal(Array.isArray(resultado), true)
        if(Array.isArray(resultado) && resultado.length>0){
            // console.log("ingresa al if")
            assert.ok(resultado[0]._id)
            assert.ok(resultado[0].email)
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

        let resultado=await daoUsers.save(userMock)
        // console.log(resultado)

        assert.ok(resultado._id)
        assert.equal(isValidObjectId(resultado._id), true)
        assert.ok(resultado.email)
        assert.equal(resultado.email, userMock.email)
        
        resultado=await mongoose.connection.collection("users").findOne({email:userMock.email})
        assert.ok(resultado._id)
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
        assert.ok(resultado.pets)
        assert.equal(Array.isArray(resultado.pets), true)
        assert.equal(resultado.pets.length, 0)
        assert.equal(3, 3)
    })
})


