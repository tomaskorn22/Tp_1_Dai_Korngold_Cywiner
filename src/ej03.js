import Alumno from "./models/alumno.js";

let alumno1 = new Alumno("Tomas Korngold", "48242157", 17);
let alumno2 = new Alumno("Martin Cywiner", "48313358", 17);
let alumno3 = new Alumno(); 


alumno3.username = "Uriel Engelberg";
alumno3.dni = "48796259";
alumno3.edad = 16; 

console.clear();
console.log(alumno1.toString());
console.log(alumno2.toString());
console.log(alumno3.toString());
