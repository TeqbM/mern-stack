require("dotenv").config();
const port = process.env.PORT || 3030
const fs = require("fs");


fs.unlink("demo.txt",function(err){
  if(err) throw err
  console.log("delete file ");
})