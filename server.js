const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
const PORT = 8000;
var cors = require('cors');
app.use(cors());
app.listen(PORT,()=>{
console.log(`connect success in port  ${PORT} `);
});
// app.get("/",(req,res)=>{
// res.send("asdas");
// });

mongoose.connect('mongodb+srv://shlomi:sd12345678@cluster0-cktbr.mongodb.net/test?retryWrites=true&w=majority'
, {useNewUrlParser: true}).then(console.log("connect succes to mongo"));


const gpu = require('./api/GraphicsCards');

 app.use("/gpu",gpu);

 const cpu = require('./api/Processors');

 app.use("/cpu",cpu);

