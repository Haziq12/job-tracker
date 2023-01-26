import Job from "../models/Job.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError, NotFound } from '../errors/index.js'
import checkPermissions from "../utils/checkPermissions.js"

const createJob = async (req, res) => {
  const { company, position } = req.body

  if (!company || !position) {
    throw new BadRequestError('Please provide all values')
  }

  req.body.createdBy = req.user.userId

  const newJob = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ newJob })
}

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId })
  res.status(StatusCodes.OK).json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
}

const updateJob = async (req, res) => {
  const { id: jobID } = req.params
  const { company, position } = req.body
  if (!company || !position) {
    throw new BadRequestError(`Please provide all values`)
  }
  const job = await Job.findOne({ _id: jobID })
  if (!job) {
    throw new NotFound(`Job not found with ID: ${jobID}`)
  }

  checkPermissions(req.user, job.createdBy)

  const updatedJob = await Job.findOneAndUpdate(job, req.body, {
    new: true,
    runValidators: true
  })

  res.status(StatusCodes.OK).json({ updatedJob })
}

const deleteJob = async (req, res) => {
  const { id: jobID } = req.params
  const job = await Job.findOne({ _id: jobID })
  if(!job) {
    throw new NotFound(`No job found with id ${jobID}`)
  }
  checkPermissions(req.use, job.createdBy)
  
}
const showStats = async (req, res) => {
  res.send('Show Stats')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }