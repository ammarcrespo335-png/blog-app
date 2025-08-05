import { Sequelize } from "sequelize"
export const seq_config = new Sequelize("blog app", "root", "root", {
    host: "localhost",
    dialect:"mysql"

})
export const connectDb =async () => {
 return await seq_config
   .authenticate()
   .then(() => {
     console.log('db is connected')
   })
   .catch(err => {
     console.log('db is failed',err)
   })
}
export const sync = async () => {
    seq_config.sync({
        alter: false,
        force:false
    }).then(() => {
        console.log("sync is done");
        
    }).catch((err) => {
        console.log("sync is failed");
        
    })
}