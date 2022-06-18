import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, 'Please provide name'],
    minLength:3,
    maxLength: 20,
    trim: true
  }
})