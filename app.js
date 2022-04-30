const express = require('express');
const app = express();

let usuario = {
    id: 0,
    nome: "Léo",
    sobrenome: "Porto Maranhão",
    idade: 38
}

app.get('/usuario', (req, res) => {
    res.send({usuario});
})

app.post('/usuario', (req, res) => {
    req.push(usuario);
    res.send({usuario});
})


app.put('/usuario/:id', (req, res) => {
    usuario.id = 1;
    res.send(usuario.id);
})

/* app.delete('/usuario/:id', (req, res) => {
    res.send(usuario);
}) */

app.listen(3000, () => console.log("Servidor rodando na prota 3000"))