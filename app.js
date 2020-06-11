//rquireds 
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
var colors = require('colors');

const argv = require('./config/yargs').argv;


var comando = argv._[0];
console.log(argv.base)

switch (comando) {
    case 'listar':
        listar(parseInt( argv.base), argv.limite)
        break;
    case 'crear':
        crearArchivo(parseInt( argv.base))
            .then(archivo => console.log(colors.green('Archivo creado:') + `${archivo}`.blue))
            .catch(e => console.log(e));

        break;
    default:
        console.log('Comando desconocido');
        break;
}


// console.log(argv.base);
// console.log(argv.limite);



