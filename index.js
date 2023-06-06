const express = require('express');
const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');



async function main(){
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Mongoose is connected");
}

main().catch(err=>console.log(err))


server.use(cors()); 
//bodyParser
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})


server.listen(process.env.PORT, () => {
  console.log('server started at ' + process.env.PORT);
});