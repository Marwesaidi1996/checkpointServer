const fs= require('fs')
const data="hello Node"
function createWelcome(path){
    fs.writeFile(path, data,'utf8',(err)=>{
        if(err){
            console.error(err.message)
        }
    })
}
function rreadWelcome(path){
    fs.writeFile(path, 'utf8',(err,data)=>{
        if(err){
            console.error(err.message)
            return
        }
        console.log(data)
    })
}
module.exports={
    createWelcome,
    rreadWelcome
}
