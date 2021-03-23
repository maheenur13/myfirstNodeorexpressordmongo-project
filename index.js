const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
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
app.post('/addUser',(req,res)=>{
    console.log('okay done!',req.body);
    //save to database
    const user = req.body;
    user.id=55;
    res.send(user);
})

app.listen(3000,()=>console.log('listening to port 3000!'))