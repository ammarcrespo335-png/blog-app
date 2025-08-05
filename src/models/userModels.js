import { DataTypes } from 'sequelize'
import { seq_config } from '../DB/connection.js'

 const userMODEL = seq_config.define('user', {
   fname: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   lname: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   email: {
     type: DataTypes.STRING,
     unique: true,
     validate: {
       isEmail: {
         msg: 'your is invalid',
       },
     },
   },
   password: {
     type: DataTypes.STRING,
     unique: false,

     allowNull: false,
    
   },
   age: {
     type: DataTypes.INTEGER,
     validate: {
       min: { msg: 'must be greater than or equal 18', args: 18 },
       max: { msg: 'must be less than or equal 50', args: 50 },
     },
   },
   
 })
export default userMODEL