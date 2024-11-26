import express from "express"; //precisa importar de novo para que app continue a funcionar
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({dest:"./uploads", storage});

const routes = (app) => {
    app.use(express.json());
    
    //retornando todos os posts
    app.get("/post", listarPosts);
    app.post("/post", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;

