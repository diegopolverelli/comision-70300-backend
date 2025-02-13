import { fakerES_MX as faker } from "@faker-js/faker"

// console.log(faker.animal.bird())
// console.log(faker.commerce.product())
// let nombre = faker.person.firstName("female")
// let apellido = faker.person.lastName()
// console.log(nombre)
// console.log(apellido)
// console.log(faker.internet.email({ firstName: nombre, lastName: apellido }))

const generaCliente = () => {
    let nombre = faker.person.firstName("female")
    let apellido = faker.person.lastName()
    let email = faker.internet.email({ firstName: nombre, lastName: apellido })
    let domicilio={
        ciudad: faker.location.city(),
        calle: faker.location.street(),
        nro: faker.location.streetAddress()
    }
    let _id= faker.database.mongodbObjectId()
    let saldoCtaCte=faker.number.float({ multipleOf: 0.25, min: 0, max:1_000_000})
    return {
        _id,
        nombre, 
        apellido, 
        email, 
        domicilio,
        saldoCtaCte
    }
}

let clientes=[]
for(let i=0; i<300; i++){
    clientes.push(generaCliente())
}

console.log(clientes)