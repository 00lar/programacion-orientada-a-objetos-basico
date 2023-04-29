class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.video = videoID;
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

const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  cursosaprobados: ["ciencia de datos", "Sistemas computacionales"],
  email: "eduardani84@gmail.com",
});
