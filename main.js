
let animales = [
    {nombre: 'perro', tipo :'mamifero'},
    {nombre: 'aguila', tipo :'ave'},
    {nombre: 'rana', tipo :'anfibio'}
];

let nombreAnimales = animales.map(function(animal){
    return animal.nombre
})

console.log(nombreAnimales);