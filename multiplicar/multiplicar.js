const fs = require('fs');
var colors = require('colors');

crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base ingresada no es un número');
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${i} x ${base} = ${i * base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data,
            (err) => {
                if (err) reject(err);
                else
                    resolve(`tabla-${base}.txt`)
            })
    })
}

listar = (base, limite=20) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} x ${base} = ${i * base} \n`);
    }
}

module.exports = {
    crearArchivo,
    listar
}