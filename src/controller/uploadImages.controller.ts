import express,{Response,Request} from 'express'
import multer from 'multer'
import path from 'path'
import fs from "fs/promises"

const upload = multer().single('avatar')
const app = express();

export const postImage = async(req: Request, res: Response) => {
    res.json(req.file);
}

export const getImage = async(req: Request, res: Response) => {
    let fileName = req.params.id;
    const pathStorageFile = path.resolve("storage", fileName)

    console.log(fileName);
    fs.readFile(pathStorageFile)
    .then((data) => {
        res.end(data)
    })
    .catch((err) => {
        res.sendStatus(404)
        console.log(err);
    })
}