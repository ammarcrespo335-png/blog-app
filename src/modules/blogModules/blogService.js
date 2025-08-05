import { blogModel } from '../../models/blogModels.js'
import userMODEL from '../../models/userModels.js'

import { handleNotFound, notFound } from '../utils/exptesions.js'
import { handlingSuccess } from '../utils/handlingSuccess.js'

export const createBlog = async (req, res, next) => {
  const { title, body, userid } = req.body
  const user = await userMODEL.findByPk(userid)
  if (!user) {
    return next(new notFound('user not found'))
  }
  const blog = await blogModel.create({
    body,
    title,
    userid,
  })
     return handlingSuccess(res,{status:201,data:blog})
}
export const updateBlog = async (req,res,next) => {
    const id = req.params.id
    const { title, userid, body } = req.body
    const blog = await blogModel.findByPk(id)
    if (!blog) {
        return next(new notFound ("blog is not found"))
    }
    if (blog.userid !== userid) {
         return next(new handleNotFound('blog is not found'))
        
    }
}