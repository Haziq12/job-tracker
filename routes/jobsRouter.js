import express from 'express'
const router = express.Router()

import { 
  createJob, 
  deleteJob, 
  getAllJobs, 
  updateJob, 
  showStats } from '../controllers/jobsController.js'

  