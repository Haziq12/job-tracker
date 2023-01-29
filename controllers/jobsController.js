import mongoose from "mongoose"
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

  const updatedJob = await Job.findOneAndUpdate({ _id: jobID }, req.body, {
    new: true,
    runValidators: true
  })

  res.status(StatusCodes.OK).json({ updatedJob })
}

const deleteJob = async (req, res) => {
  console.log('here: ', req.user)
  const { id: jobID } = req.params
  const job = await Job.findOne({ _id: jobID })
  if (!job) {
    throw new NotFound(`No job found with id ${jobID}`)
  }
  checkPermissions(req.user, job.createdBy)
  await job.remove()
  res.send(StatusCodes.OK).json({ msg: `Job removed` })
}

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } }
  ])

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr
    acc[title] = count
    return acc
  }, {})

  const defaultStats = {
    Pending: stats.Pending || 0,
    Interview: stats.Interview || 0,
    Declined: stats.Declined || 0,
  }

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group:
      {
        _id:
        {
          year: { $year: 'createdAt' },
          month: { $month: 'createdAt' }
        }
      }
    }
  ])

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }