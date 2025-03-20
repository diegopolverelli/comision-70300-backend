import {expect} from "chai"
import {describe, it} from "mocha"
import supertest from "supertest"
// import { server } from "../src/app.js"

import mongoose from "mongoose"
await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase40')

const requester=supertest("http://localhost:8080")
// const requester=supertest(server)

describe("Pruebas sobre router /api/pets", function(){
    this.timeout(6000)
    
    describe("Pruebas básicas (sin subir imágenes)",()=>{
        before(async()=>{
            await mongoose.connection.collection("pets").deleteMany({specie:"testing20250319"})
        })

        it("Si envío datos correctos de una mascota, me retorna un status 200", async()=>{
            let mockPet={name:"Roger",specie:"testing20250319",birthDate:new Date()}

            let {statusCode}=await requester.post("/api/pets").send(mockPet)
            // console.log(resultado.status)
            expect(statusCode).to.be.eq(200)
        })

        it("Si envío datos correctos de una mascota, se da de alta en DB", async()=>{
            let mockPet={name:"Roger",specie:"testing20250319",birthDate:new Date()}

            let {statusCode, body}=await requester.post("/api/pets").send(mockPet)
            // console.log(resultado.status)
            expect(body).to.has.property("payload")
            expect(body).to.has.property("status").and.to.be.eq("success")
            expect(body.payload).to.have.property("name").and.to.be.eq(mockPet.name)
        })

        it("Si NO envío todos los datos correctos de una mascota, me retorna un status 400", async()=>{
            let mockPet={specie:"testing20250319",birthDate:new Date()}

            let {statusCode}=await requester.post("/api/pets").send(mockPet)
            // console.log(resultado.status)
            expect(statusCode).to.be.eq(400)
        })
        
        it("Si NO envío todos los datos correctos de una mascota, me retorna una response conteniendo una property status con valor 'error'", async()=>{
            let mockPet={specie:"testing20250319",birthDate:new Date()}

            let {body}=await requester.post("/api/pets").send(mockPet)
            // console.log(resultado.status)
            expect(body).to.has.property("status").and.to.be.eq("error")
        })
        
        it("El método get /api/pets, retorna status 200", async()=>{
            let {statusCode}=await requester.get("/api/pets")
            // console.log(resultado.status)
            expect(statusCode).to.be.eq(200)
        })

        it("El método get /api/pets, retorna una response con proporty payload de tipo array de mascotas", async()=>{
            let {body}=await requester.get("/api/pets")
            // console.log(resultado.status)
            expect(body).to.has.property("payload")
            expect(Array.isArray(body.payload)).to.be.true
            // if(Array.isArray(body.payload) && body.payload.length>0 ){
            //     expect(body.payload[0]).to.has.property("name")
            //     expect(body.payload[0]).to.has.property("specie")

            //     body.payload.forEach(mascota=>{
            //         expect(mascota).to.have.property("name")
            //         expect(mascota).to.have.property("specie")
            //         expect(mascota).to.have.property("birthDate")
            //         expect(mascota).to.have.property("_id")
            //     })
            // }

            if(Array.isArray(body.payload) ){
                body.payload.forEach(mascota=>{
                    expect(mascota).to.have.property("name")
                    expect(mascota).to.have.property("specie")
                    expect(mascota).to.have.property("birthDate")
                    expect(mascota).to.have.property("_id")
                })
            }

        })

    })


    describe("Pruebas complejas (con envío de imágenes en la request)",async()=>{
        it("Prueba...", ()=>{
            expect(1).to.be.eq(1)
        })
    })
})
