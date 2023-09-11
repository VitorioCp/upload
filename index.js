const express  = require ('express')
const multer = require ('multer')
const path = require("path")

const app = express();
const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, "./uploads");

    },
    filename: (req, file, cb) =>{
        const {name, ext} = path.parse(file.originalname);
    
        cb(null, `${name}-${Date.now()}.${ext}` );
    }
})
const upload = multer({storage});

app.use(express.static("public"));

app.post("/upload", upload.single('file'), (req,res) => {
    return res.send('Uploaded file!!!');
});

app.listen(3000);
