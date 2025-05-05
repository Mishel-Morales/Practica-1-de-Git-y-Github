console.log("Hola Mundo")

import readline from "readline-sync"
let genero = `femeninino`

switch(genero){
    case 'Femenino':
        console.log('Hola guapa!!')
        break;
        case 'Masculino':
            console.log('Hola')
        break;
        default:
            console.log('Hola!')
            break;    
}

//Cambio desde rama "rama-a".
switch(genero){
    case 'Femenino':
        console.log('Hola guapa!!')
        break;
        case 'Masculino':
            console.log('Hola')
        break;
        default:
            console.log('Hola!')
            break;    
}