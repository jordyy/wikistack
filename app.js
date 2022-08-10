const express = require("express");
const app = express();
const path = require('path');
// const router = express.Router();


const { main } = require("./views");

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
const staticMiddleware = express.static(path.join(__dirname, 'public'));
app.use(staticMiddleware);

app.get("/", (req, res) => {
    res.send(main('')); 
})

let PORT = 3000;

app.listen(PORT, ()=> console.log(`listening on PORT ${PORT}`));