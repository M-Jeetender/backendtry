const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');


const model = require('../model/product');
const Product = model.Product;



exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save().then((err,doc)=>{
    res.json({"Then" : "Here"});
  }).catch(err=>{
    {
      res.json(err);
    }
  })
  


};

exports.getAllProducts = async (req, res) => {
   const products = await Product.find({price:{$gt:280}});
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const products = await Product.findById(id);
  res.json(products);
  }catch(err){
    res.status(400).json(err);
  }
 
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndReplace({_id : id},req.body,{new:true})
    res.status(201).json(doc);
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
  
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndUpdate({_id : id},req.body,{new:true})
    res.status(201).json(doc);
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndDelete({_id : id})
    res.status(201).json(doc);
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};