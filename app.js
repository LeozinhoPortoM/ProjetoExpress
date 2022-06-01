const express = require('express');
const app = express();
const port = 3000;

let usuario = {}

const series = [
    {
      id: 1,
      nome: 'Irmão do Jorel'
    },
    {
      id: 2,
      nome: 'Um maluco no pedaço'
    }
]

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


app.get("/serie/:id", (req, res) => {
    let { id } = req.params;
    console.log(`Id ${id}`)
    series.find(serie => {
        if (serie.id == id) {
            res.send(serie)
        }
    });
});


app.put('/usuario/:id', (req, res) => {
    res.send("Rota para editar usuário da lista");
})

app.delete('/usuario/:id', (req, res) => {
    res.send("Rota para deletar um usuário da lista");
})

app.listen(port, () => console.log("Servidor rodando na prota 3000"))