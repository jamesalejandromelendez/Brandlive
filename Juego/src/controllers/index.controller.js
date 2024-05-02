const fs = require('fs');
const dictionary = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8').split('\n');
};
// Solucion 1

const juego = (req, res) =>{
    const { letters, qtyLetter} = req.body;
    const words = dictionary('./src/controllers/diccionario.txt');
    const data = [];
    for (texto of words) {
        if (texto.length !== qtyLetter) {
            continue;
        }
        const word =[];
        for (letra of texto) {
            for (letter of letters.toLowerCase()) {
                if (letra === letter) {
                    word.push(letra);
                    break;
                };   
            };
        };
        const final = (word.join(''));
        
        if (final === texto) {
            data.push(final);
        }
    };
    res.send(data);
};

// Solucion 2 

const juego_2 = (req, res) =>{
    const data =[]
    const { letters, qtyLetter} = req.body;
    for (let words of dictionary('./src/controllers/diccionario.txt')) {
        const word = words.replace('\r', '')
        if (word.length !== qtyLetter) {
            continue; 
        }
        const counter = {};
        for (letter of word) {    
            if (!counter[letter]) {
                counter[letter] = 1;
            } else {
                counter[letter]++;
            }
        }

        for (letter of letters.toLowerCase()) {
            if (counter[letter] && counter[letter] > 0) {
                counter[letter]--;
            }
        }
        const verify = Object.values(counter).every(count => count === 0);
        if (verify) {
            data.push(word);
        }
    }
    res.send(data);
}

module.exports = { juego, juego_2 }

// Para ejecutar utilizó primero el comando "npm run dev" en la consola y hay enseguida realizó la solicitud
