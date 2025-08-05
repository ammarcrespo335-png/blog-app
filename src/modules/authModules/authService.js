import userMODEL from "../../models/userModels.js"
import { handleNotFound } from '../utils/exptesions.js'

export const signup = async (req,res,next) => {
    const { fname, lname, email, password, gender, age } = req.body
    const isExist = await userMODEL.findOne({
        where: {
        email
        }
    })
    if (isExist) {
        return next (new Error('email is alrready exist',{cause:400}))
    }
    const user = await userMODEL.create({
      fname,
      lname,
      email,
      password,
      gender,
      age,
    })


   return res.status(201).json({msg:"done",user})
}
export const login = async (req,res,next) => {
    const { email, password } = req.body
    const  user = await userMODEL.findOne({
        where: {
            email,
            password
        }
    })
    if (!user) {
        return next(new handleNotFound())
    }
  return await res.status(201).json({ msg: 'done', user })
}

