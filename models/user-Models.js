const { ReturnDocument } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    uique: true,
    required:true
  },
  email: { 
    type: String,
    required: true,
    unique: true 
  },
  password: { 
    type: String,
    required: true }
});
userSchema.set("toJSON",{
  transform:(document, returnDocument)=> {
    returnDocument.id = document._id.toString();
    delete returnDocument._id;
    delete returnDocument.password;
    delete returnDocument.__v;
  }
});



module.exports = mongoose.model('User', userSchema);
 