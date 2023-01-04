import Job from "../models/Job.js" 
import { StatusCodes } from "http-status-codes"
import { BadRequestError, NotFound } from '../errors/index.js'

const createJob = async (req, res) => {
  const { company, position } = req.body 
  if(!company || !position) {
    throw new BadRequestError('Please provide all values') 
  }
  req.body.createdBy = req.user.userId 
  const newJob = await Job.create(req.body) 
  res.status(StatusCodes.CREATED).json({ newJob })  

}
const getAllJobs = async (req, res) => {
  res.send('Get All Jobs')
}
const updateJob = async (req, res) => {
  res.send('Update Job')
}
const deleteJob = async (req, res) => {
  res.send('Delete Job')
}
const showStats = async (req, res) => {
  res.send('Show Stats')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }