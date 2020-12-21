const express =require('express');
const app = express();
const PORT =2220
app.use(express.static('public'))
app.set('view engine' , 'ejs')
const myData=require('./menu.json')


app.get('/' ,(req,res) =>{
    res.render('index',{title:'Home/About'})
})
app.get('/team' ,(req,res) =>{
    res.render('team',{title:'Team'})
})
app.get('/booking' ,(req,res) =>{
    res.render('booking',{title:'Booking'})
})
app.get('/GALLERY' ,(req,res) =>{
    res.render('GALLERY',{title:'GALLERY'})
})
app.get('/MENU' ,(req,res) =>{
    res.render('MENU',{title:'MENU',myData})
})




app.listen(PORT,() => console.log(`erver running on http://localhost:${PORT}`))