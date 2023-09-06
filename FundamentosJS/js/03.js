// Tipos de datos


//Undefined
let cliente;
console.log(typeof cliente);

//Boolean
const descuento = true;
console.log(descuento);
console.log(typeof descuento);

//Number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);

// Strings
const alumno = "Juan"
let producto = 'monitor'
const numero = "30"

console.log(typeof numero);

//Bigint
const numeroGrande = BigInt(545555555555555454554855)
console.log(typeof numeroGrande);

const numero4 = 10;
console.log(Number(numeroGrande) + numero4) //coercion explicita


//Symbol: dato unico
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())


//Null
const descuento2 = null;
console.log(typeof descuento2);