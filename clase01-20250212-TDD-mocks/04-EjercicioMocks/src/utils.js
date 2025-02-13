import { fakerES as faker} from "@faker-js/faker"
const generaCliente = () => {
    let nombre = faker.person.firstName("female")
    let apellido = faker.person.lastName()
    let email = faker.internet.email({ firstName: nombre, lastName: apellido })
    let dni=faker.number.int({ min: 9_000_000, max: 53_000_000 })
    return {
        nombre, 
        apellido, 
        email, 
        dni
    }
}

console.log(generaCliente())
