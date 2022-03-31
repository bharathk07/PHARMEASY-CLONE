
// checking

const  connect  = require("./configs/db")
const app = require("./backend")


app.listen(5300,async()=>{
    try{
        await connect()
        console.log("Connect to Port 5300...")
    }
    catch(err){
        console.log(err.message)
    }
})

