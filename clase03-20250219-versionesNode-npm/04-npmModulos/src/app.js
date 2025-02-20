const colors=require("colors")

const saludo=(texto)=>{
    console.log(`${texto}`.rainbow)
}

const saludo2=(texto)=>{
    console.log(`${texto}`.zebra)
}


module.exports={saludo, saludo2}

