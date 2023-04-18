/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

"gato" => "gaitober"
gaitober" => "gato"

Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

    La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
    En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
    En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
    Por fin, en la columna Concluido estarán los elementos ya concluidos.

    Desencripta nuestro mensaje secreto!

fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!

*/

// Selectores


const textoOriginal = document.getElementById("textoEntrada");
const clave = document.getElementById("textoSalida");
const mensaje = document.getElementById('mensaje'); // Obtén el elemento del mensaje


function btnEncriptar(){
    if (textoOriginal.value.trim() === "") { // Utiliza trim() para eliminar espacios en blanco y compara con una cadena vacía
        mensaje.style.display = 'block';
        textoOriginal.classList.add('rojo');
        return; // Retorna para salir de la función y evitar más ejecución del código
      } else {
        mensaje.style.display = 'none';
        textoOriginal.classList.remove('rojo');
      }
    const textoEncriptado = encriptar(textoOriginal.value);
    clave.value = textoEncriptado;
    textoOriginal.value = "";
}

function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(textoOriginal.value);   
    clave.value = textoDesencriptado;
    textoOriginal.value = "";
}

function btnCopiar(){
    const textoCopiado = clave.value;
    this.value = textoCopiado;
    textoOriginal.value = this.value;
}

function encriptar(stringEncriptada){
    // Creando una matriz de las letras a encriptar
    const keys = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < keys.length;i++){
        stringEncriptada = stringEncriptada.replaceAll(keys[i][0], keys[i][1]);
    }

    return stringEncriptada;
}


function Desencriptar(stringDesencriptada){
    const keys = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < keys.length;i++){
        stringDesencriptada = stringDesencriptada.replaceAll(keys[i][1], keys[i][0]);
    }

    return stringDesencriptada;
}