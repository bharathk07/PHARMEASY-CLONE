const  connect  = require("./configs/db")
const app = require("./backend")


app.listen(6000,async()=>{
    try{
        await connect()
        console.log("Connect to Port 6000...")
    }
    catch(err){

    }
})