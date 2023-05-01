class Student {
    constructor(nombre,email,cursosAprobados = [])
    {
        this.nombre = nombre;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }

    information()
}

class cursos {
    constructor(Nombre, clases = [], lang = "spanish", creditos = 8)
    {
        this.Nombre = Nombre
        this.clases = clases
        this.lang = lang;
        this.creditos = 8
    }
}

class FreeStudent extends Student {
    constructor(props){
        super(props)
      }
}

class BasicStudent extends Student {
    constructor(props){
        super(props)
      }
}


class ExpertStudent extends Student {
    constructor(props){
        super(props)
      }
}

const CursoHtml = new cursos ({
    Nombre: "Curso Html Y Css Basico",
    clases: ("que es html", "Que es css")
})

const Miguelito = new ExpertStudent({
    nombre: "Miguel Perez",
    email: "MiguePigs@gmail.com",
    cursosAprobados: [CursoHtml],
})

Miguelito