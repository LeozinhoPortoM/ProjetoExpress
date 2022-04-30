const express = require('express');
const app = express();

let usuario = {}

app.get('/usuario', (req, res) => {
    res.send("Rota get para usuario");
})

app.post('/usuario', (req, res) => {
    res.send(usuario = {
        id: 0,
        nome: "Léo",
        sobrenome: "Porto Maranhão",
        idade: 38
    });
})


app.put('/usuario/:id', (req, res) => {
    res.send("Rota para editar usuário da lista");
})

app.delete('/usuario/:id', (req, res) => {
    res.send("Rota para deletar um usuário da lista");
})

app.listen(3000, () => console.log("Servidor rodando na prota 3000"))