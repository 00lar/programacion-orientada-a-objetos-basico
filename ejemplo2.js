class learningPaths {
  constructor({ name, curses = [] }) {
    this._name = name;
    this.curses = curses;
  }
  get name() {
    return this._name;
  }

  set name(Nuevonombrsito) {
    if (Nuevonombrsito === "Curso Malito De Programacion Basica") {
      console.log("Wey...no");
    } else {
      this._name = Nuevonombrsito;
    }
  }
}

const Desarrolloweb = new learningPaths({
  name: "Curso desarrollo web",
  curses: ["Html", "css", "javascript"],
});

Nuevonombrsito = "Nuevo curso";

Desarrolloweb.name;

const Desarrollovideojuegos = new learningPaths({
  name: "Curso Desarrollo de videojuegos",
  curses: ["Inicio c", "canvas"],
});

class student {
  constructor({
    name,
    username,
    email,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    aprovedCurses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.socialmedia = {
      facebook,
      instagram,
      twitter,
    };
    this.aprovedCurses = aprovedCurses;
    this.learningPaths = learningPaths;
  }
}

const juan = new student({
  name: "Daniel",
  username: "00lar",
  email: "eduardani84@gmail.com",
  twitter: "00lartks",
  learningPaths: [Desarrolloweb, Desarrollovideojuegos],
});

juan;
