import express from "express"

const app = express(); // app vai representar o sevidor, entao quando formo pedir, "Servidpr, faça tal coisa", vai ser declarado o app

app.listen(3000, () => {
    console.log("escutando");
})

app.get("/rota", (req, resp) => {
	resp.status(200).send("Testando para ver se funciona mesmo");
})