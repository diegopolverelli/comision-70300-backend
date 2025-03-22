export const tipado=`Tipado de variables`


let nombre2="Juan"
// nombre2=false
let nombre:string="Matilde"
console.log(nombre)

let edad:number=28

edad=24
console.log(edad)

let dato:number|string|undefined

dato="Pedro"

dato=100

// dato={
//     nombre:"Juan"
// }

type PersonaType={
    nombre:string
    email:string
}

let persona:PersonaType

persona={
    nombre:"Laura", email:"laura@test.com"
}

let valor:any
valor=false
valor=1
valor=[]

class Persona{
    nombre:string
    edad:number

    constructor(nombre:string, edad:number){
        this.nombre=nombre
        this.edad=edad
    }
}

let persona2:Persona

persona2={
    nombre:"Pedro", edad:22
}

interface PersonaInterface{
    nombre:string
    email:string
    saludo:()=>undefined
}

let persona03:PersonaInterface

persona03={
    nombre:"Luis", 
    email:"luis@test.com", 
    saludo:()=>{
        console.log("hola")
    }
}

class Alumno implements PersonaInterface{
    nombre: string = "Pepe"
    email: string 
    // email: string ="pepe@test.com"


    constructor(email:string){
        this.email=email
    }

    saludo(){
        console.log(`Hola ${this.nombre}!!!`)
        return undefined
    }
    
}

let alumno01:Alumno=new Alumno("test@test.com")
console.log(alumno01)

let alumnos:Alumno[]
alumnos=[
    {
        nombre: "",
        email: "",
        saludo: function (): undefined {
            throw new Error("Function not implemented.")
        }
    },
    {
        nombre:"Juan", email:"jj@test.com",
        saludo: function (): undefined {
            throw new Error("Function not implemented.")
        }
    }
]

// alumnos.push(persona)
alumnos.push(alumno01)
console.log(alumnos)