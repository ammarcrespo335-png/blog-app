import { connectDb, sync } from './src/DB/connection.js'
import userMODEL from './src/models/userModels.js'
import authRouter from './src/modules/authModules/authController.js'
import blogRouter from './src/modules/blogModules/blogController.js'
import userRouter from './src/modules/userModules/usercontroller.js'


const bootstrap = async (app, express) => {
  app.use(express.json())
  await connectDb()
  await sync()
  
  app.use('/auth', authRouter)
  app.use('/users', userRouter)
  app.use('/blogs', blogRouter)


  const port = 3000
  app.listen(port, () => {
    console.log('server is running on port', port)
  })
}
export default bootstrap
