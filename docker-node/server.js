const express = require('express');


const app = express();


const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.json({message:`Server is running on ${PORT}`})
})
app.get('/node',(req,res)=>{
    res.json({message:`This side is Node, Inside the container`})
})


app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`))