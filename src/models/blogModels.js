import { DataTypes } from 'sequelize'
import { seq_config } from '../DB/connection.js'
import userMODEL from './userModels.js'

export const blogModel = seq_config.define('blog app', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
  },
})
userMODEL.hasMany(blogModel, {
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})
blogModel.belongsTo(userMODEL)
