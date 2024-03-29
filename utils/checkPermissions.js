import { UnAuthenticatedError } from '../errors/index.js'

const checkPermissions = (requestUser, resourceUserId) => {
  if(requestUser.userId === resourceUserId.toString()) return 
  throw new UnAuthenticatedError(`Not Authorized To Access This Route`)
}

export default checkPermissions