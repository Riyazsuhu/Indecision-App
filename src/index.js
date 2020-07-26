const express=require('express')
const app=express()
const path=require('path')
const port=process.env.PORT || 3000

const publicDirectory=path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(port,()=>{
    console.log(`Indecision app runing on port ${port}`)
})