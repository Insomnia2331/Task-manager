const mongoose = require('mongoose')

const connectString = 
'mongodb+srv://wa849262582:Wa849262582@nodeexpressprojects-tas.sge2jx3.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'


const connectDB =(url)=>{
    return mongoose
    .connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB