import jwt from "jsonwebtoken"
import { UnAuthenticatedError } from "../errors/index.js"

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if(!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
  const token = authHeader.split(' ')[1]
  next()
}

export default auth 
