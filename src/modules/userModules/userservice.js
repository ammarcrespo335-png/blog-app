import { NUMBER, Sequelize } from 'sequelize'
import userMODEL from '../../models/userModels.js'
import { notFound } from '../utils/exptesions.js'
import { handlingSuccess } from '../utils/handlingSuccess.js'

export const updateUser = async (req, res, next) => {
  const id = req.params.id
  const { fname, lname, age } = req.body
  const user = await userMODEL.findByPk(id)
  if (!user) {
    return next(new notFound())
  }
  const updateUser = await userMODEL.update(
    {
      fname,
      lname,
      age,
    },
    {
      where: {
        id,
      },
    }
  )
  return handlingSuccess(res,{status:201,data:updateUser})
}


export const deleteUser = async (req, res, next) => {
  const id = req.params.id

  const deleteUser = await userMODEL.destroy({ where: { id } })
  if (!deleteUser) {
    return next(new notFound())
  }

  return handlingSuccess(res, { status: 201, data: deleteUser })}

export const getAll = async (req, res, next) => {
  const id = req.params.id
  const filter = {}
  if (req.params.id) {
    filter.id = id
  }

  const users = await userMODEL.findAll({
    where: 
      filter,
    
  })
  return handlingSuccess(res, { status: 201, data: users })}
