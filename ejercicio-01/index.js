console.log("Hola Mundo")

// Variables
// Var: Variables globales
// var numInt = 2 
// var numFloat = 2.74 
// var nombre = 'Johan' 
// var enabled = false 
// var nombres = ['johan','nicolas','marco',1998,1997,2001,false, true]
// var usuario1 = {
//     "name": "Johan",
//     "age": 24,
//     "status": true,
//     "sports": ["futbol", "tennis", "tejo"]
//   }

//   console.log("Imprimiendo Datos")
//   console.log("numInt",typeof(numInt))
//   console.log("numFloat",numFloat)
//   console.log("nombre",typeof(nombre))
//   console.log("enabled",enabled)
//   console.log("nombres",nombres)
//   console.log("usuario1",usuario1)
  

// Declarar Funciones en JS
// function Imprimir(name){
//     let mensaje = "Hola"
//     console.log("Mensaje: ", mensaje+name)

//     //return mensaje+' '+name
// }


// const Imprimir = (name,age,status)=>{
//     let mensaje = "Hola"
//     console.log("Mensaje: ", mensaje+name)
// }

// Imprimir("Nicolas")

const btnLogin = document.getElementById('login')
const txtUser = document.getElementById('user')

console.log(txtUser.value)
btnLogin.onclick = ()=>{
    console.log("click")
}

