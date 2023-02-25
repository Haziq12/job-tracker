import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Please provide company name'],
    maxlength: 50
  },
  position: {
    type: String,
    required: [true, 'Please provide job title'],
    maxlength: 100
  },
  status: {
    type: String,
    enum: ['Interview', 'Declined', 'Pending', 'All'],
    default: 'All'
  },
  jobType: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Remote', 'Internship', 'All'],
    default: 'All'
  },
  jobLocation: {
    type: String,
    required: true,
    default: 'My city',
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user']
  }
},
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)