function videoplay(id){
  const urlsecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se esta reproduciendo desde la url "+ urlsecreta); 
}
function videostop(id) {
  const urlsecreta = ("https://platziultrasecretomasquelanasa.com/" + id);
  console.log("Pausamos la url " + urlsecreta)
}


export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.video = videoID;
  }

  reproducir(){
    videoplay(this.video);
  }
  pausar(){
    videostop(this.video);
  }
}

 
const natalia = {
  name: "Natalia",
  age: 20,
  cursosaprobados: [
    "Curso definitivo de html y css",
    "cursos practico de html y css",
  ],

  aprobarCurso(nuevocursito) {
    this.cursosaprobados.push(nuevocursito);
  },
};

function student(name, edad, cursosaprobados) {
  this.name = name;
  this.edad = edad;
  this.cursosaprobados = cursosaprobados;
  // this.aprobarCurso = function (nuevocursito) {
  //  this.cursosaprobados.push(nuevocursito);
  //};
}

student.prototype.aprobarCurso = function (nuevocursito) {
  this.cursosaprobados.push(nuevocursito);
};

const juanita = new student(
  "Eduardo Daniel",
  21,
  "Curso introduccion videojuegos",
  "curso avanazado javascript"
);

//prototipos con la sintaxis de clases
class Curso {
  constructor({
    name, classes = [0], isFree = false, lang = "spanish"
  }) {
    this.name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
}

const cursoProgBasico = new Curso({
  name: "Curso Gratis de programacion basica",
  isFree: true,
});

const CursoHtml = new Curso ({
  name: "Curso basico html y css",
  lang: "english", 
});



class Student2 {
  constructor({ name, age, cursosaprobados = [], email }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosaprobados = cursosaprobados;
  }
  aprobarCurso(nuevocursito) {
    this.cursosaprobados.push(nuevocursito);
  }
}


class FreeStudent extends Student2{
  constructor(props){
    super(props)
  }

  approveCourse(newcourse){
    if (newcourse.isFree){
      this.cursosaprobados.push(newcourse) 
    } else {
      console.warn("Lo sentimos, " + this.name+ ", solo puedes tomar cursos abiertos")
    }
  }
}

class BasicStudent extends Student2{
  constructor(props){
    super(props)
  }
  approveCourse(newcourse){
    if (newcourse.lang !== "english"){
      this.cursosaprobados.push(newcourse) 
    } else {
      console.warn("Lo sentimos, " + this.name+ ", No puedes tomar cursos en ingles")
    }
  }
}

class ExpertStudent extends Student2{
  constructor(props){
    super(props)
  }
  approveCourse(newcourse) {
    this.cursosaprobados.push(newcourse)
  }
}


const miguelito = new FreeStudent({
  name: "Miguel",
  age: 28,
  cursosaprobados: ["ciencia de datos", "Sistemas computacionales"],
  email: "eduardani84@gmail.com",
});

miguelito()