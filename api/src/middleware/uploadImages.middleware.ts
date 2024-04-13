import multer from "multer"
import path from 'path'

enum typeImage {
  'image/png',
  'image/jpeg',
  'image/jpg'
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'storage/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  }
})

const upload = multer({
  storage: storage,
  limits:{
    files: 1,
    fileSize: 1024 * 1024
  },
  fileFilter(req, file, cb) {
    if(file.mimetype in typeImage){
      console.log("Imagen Aceptada!");
      cb(null, true)
    } else {
      console.log("Imagen Rechazada!");
      cb(null, false)
      cb(new Error('Invalid mime type!'));
    }
  },
});


export default upload;