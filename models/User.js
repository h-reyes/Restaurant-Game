const mongoose = require('mongoose');
const Schema = mongoose.Schema;
SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    }
}, {
    timestamps: true, // Saves created
    toJSON: {
        transform: function(doc, ret) {
          delete ret.password;
          return ret;
        }
      }    
  });

module.exports = mongoose.model('User', userSchema);