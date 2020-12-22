const express =require('express');
const app = express();
const PORT = process.env.PORT || 2220
app.use(express.static('public'))
app.set('view engine' , 'ejs')
const myData=require('./menu.json')
const myNav=require('./nav.json')


app.get('/' ,(req,res) =>{
    res.render('index',{title:'Home/About',myNav})
})
app.get('/team' ,(req,res) =>{
    res.render('team',{title:'Team' ,myNav})
})
app.get('/booking' ,(req,res) =>{
    res.render('booking',{title:'Booking',myNav})
})
app.get('/GALLERY' ,(req,res) =>{
    res.render('GALLERY',{title:'GALLERY',myNav})
})
app.get('/MENU' ,(req,res) =>{
    res.render('MENU',{title:'MENU',myData,myNav})
})
app.get('/event' ,(req,res) =>{
    res.render('event',{title:'EVENT',myNav})
})
app.get('/contact' ,(req,res) =>{
    res.render('contact',{title:'CONTACT',myNav})
})
app.use(function (req, res, next) {
    res.status(404).render('404', { title:'Page not Found' });
});




app.listen(PORT,() => console.log(`erver running on http://localhost:${PORT}`))