const mongoose = require('mongoose');

export default async function connDB(){
try{
 await mongoose.connect('mongodb+srv://alkamaliamro:alkamaliamro@cluster0.kwanzlc.mongodb.net/'
//,{useUnified:true,useNewUrlParser:true}
  )
 console.log('Connected DB Successfully.')
 }catch(error){
 console.log('ERR:'+error)
 }
}

