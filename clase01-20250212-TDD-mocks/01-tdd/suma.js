// export const suma=(a, b)=>{
//     if(typeof a != "number" || typeof b!="number") return "error"

//     return a+b
// }

// export const suma=(...sumandos)=>{

//     let error=false
//     for(let i=0; i<sumandos.length; i++){
//         if(typeof sumandos[i]!="number"){
//             error=true
//         }
//     }
//     if(error) return "error"

//     let resultado=0
//     for(let i=0; i<sumandos.length; i++){
//         resultado=resultado+sumandos[i]
//     }

//     return resultado

// }


// export const suma=(...sumandos)=>{

//     let resultado=0
//     let error=false
//     for(let i=0; i<sumandos.length; i++){
//         if(typeof sumandos[i]!="number"){
//             error=true
//         }
//         resultado=resultado+sumandos[i]
//     }
//     if(error) return "error"
//     return resultado

// }

export const suma=(...sumandos)=>{
    let error=sumandos.some(sumando=>typeof sumando!="number")
    if(error) return "error"

    return sumandos.reduce((acum, valor)=>acum+=valor, 0)

}