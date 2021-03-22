const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const users=['Mahee','Suzon','Shohaib','Ashik','Saiful','Sakib Ahmed']
app.get('/',(req,res)=>{
    const fruit = {
        product :'ada',
        price:'240tk'
    }
    res.send(fruit)
})
app.get('/users/:id',(req,res)=>{
    const userId=req.params.id;
    console.log(req.params);
    const name = users[userId];
    res.send({userId,name});
    // res.send()
})
app.get('/fruits/banana',(req,res)=>{
    res.send({fruit:'banana',quantity: 2000,price : 4000})
})

app.listen(3000,()=>console.log('listening to port 3000!'))