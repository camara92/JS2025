// var carre = (nombre) => {
    
//     if(nombre && typeof(nombre) === 'number'){
// return nombre * nombre;
//     }else {
//         return null
//     }
// }

// ajout des properietes aux objets :

// var car = new Object();
// // on peut definir un objet comme ceci :
// // var car = {}
// // on peut aussi faire les deux en meme temps 
// var daouda_car = {
//     _id: 12345678,
//     name: "Ford",
//     annee: 2010,
//     color: "bleu"
// }
// // raojout des pro
// daouda_car.model= "Mustang";

// car._id = 25252525;
// car.name = "Toyata";
// car.annee = 2020;
// car.color = "rouge";

var person= {
    username: "John Doe",
    email:"daouda.camara@gmail.com",
    phone: "0659841730",
    adresse: {
        
        street :"236 Rue du clos Lyon 69001",
        city: "Lyon",
        country: "France"
    },
    age: 30,
    hobbies: ["reading", "cooking", "traveling"],
    


}
var daouda = {
    // le spress operateur est une sous-propriété de la personne on peut en ajouter des nouvelles proprietés et les restes vont être prise pâr Person
    ...person,
    username: "Daouda Camara",
    age: 28,
    hobbies: ["reading", "painting", "cooking"],
    
}

var sayHello = function(person){
    console.log("Hello, my name is " + person.username);
    
}

var sayHelloo = function({age}){
    console.log("Hello,  and I am " + age + " years old");
    
}