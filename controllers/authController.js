import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'



class NotFound extends CustomAPIError {
  constructor(message){
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}


const register = async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
      throw new BadRequestError('Please provide all values')
    }

    const user = await User.create(name, email, password)
    res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('Login user')
}

const updateUser = async (req, res) => {
  res.send('updateUser user')
}

export { register, login, updateUser }