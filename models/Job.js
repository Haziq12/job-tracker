import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  company: {
    type: String, 
    required: true,
    
  }
})