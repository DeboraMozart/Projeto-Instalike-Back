import express from "express"
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postsRoutes.js";


const app = express(); // app vai representar o sevidor, entao quando formo pedir, "Servidpr, faça tal coisa", vai ser declarado o app
routes(app);
//base de dados
const post = [
    {
        id: 1,
        descrição: "descrição de alguma coisa",
        imgCaminho: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descrição: "uma descrição interessante",
        imgCaminho: "https://placekitten.com/300/150"
    },
    {
        id: 3,
        descrição: "uma descrição sobre gatos fofos",
        imgCaminho: "https://placekitten.com/400/200"
    },
    {
        id: 4,
        descrição: "uma descrição sobre paisagens lindas",
        imgCaminho: "https://placekitten.com/500/250"
    },
    {
        id: 5,
        descrição: "uma descrição sobre tecnologia moderna",
        imgCaminho: "https://placecats.com/sofia/350/175"
    },
    {
        id: 6,
        descrição: "uma descrição de algo divertido",
        imgCaminho: "https://placekitten.com/600/300"
    }
  ];

function buscaPostPorId(id){
    return post.findIndex((posts) => {
		return posts.id === Number(id);
	});
}

app.listen(3000, () => {
    console.log("escutando");
})

//pegando um por um
/*app.get("/post/:id", (req, res) => {
	const index = buscaPostPorId(req.params.id);// o id aqui é pq colocamos na rota id, se eu tivesse colocado outra palavra no lugar de id eu teria que usa-la 
    res.status(200).json(post[index]);
})

*/