import {expect} from "chai"
import {describe, it} from "mocha"
import supertest from "supertest"


import mongoose, { isValidObjectId } from "mongoose"
await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase40')

const requester=supertest("http://localhost:8080")



describe("Pruebas al router de sessions", function(){
    this.timeout(8000)

    before(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test20250326@test.com"})
    })

    let cookie
    let userMock={
        first_name: "Test", 
        last_name:"Test", 
        email:"test20250326@test.com", 
        password:"123"
    }

    it("Si hago un post a /api/sessions/register con datos válidos, registra un usuario", async()=>{
        let {body}=await requester.post("/api/sessions/register").send(userMock)

        // console.log(body)
        // { status: 'success', payload: '67e49b0330b63da4ac9c9470' }
        expect(body).to.has.property("status").and.to.be.eq("success")
        expect(isValidObjectId(body.payload)).to.be.true
    })

    it("Si hago post a login con un usuario previamente registrado, me retorna una cookie llamada coderCookie", async()=>{
        // let userMock={
        //     email:"test20250326@test.com", 
        //     password:"123"
        // }

        let {body, headers}=await requester.post("/api/sessions/login").send(userMock)

        cookie=headers["set-cookie"][0]
        // console.log(headers)
        let nombreCookie=headers["set-cookie"][0].split("=")[0]
        // console.log(nombreCookie)
        expect(nombreCookie).to.be.eq("coderCookie")

    })

    it("Si envío un get a /current seteando la cookie que devuelve login, retorna los datos del usuario", async()=>{
        let {body}=await requester.get("/api/sessions/current")
                                .set("Cookie", cookie)

        // console.log(body)
        // {
        //     status: 'success',
        //     payload: {
        //       name: 'Test Test',
        //       role: 'user',
        //       email: 'test20250326@test.com',
        //       iat: 1743035985,
        //       exp: 1743039585
        //     }

        expect(body.status).to.be.eq("success")
        expect(body.payload).to.have.property("email").and.to.be.eq(userMock.email)
    })
})
