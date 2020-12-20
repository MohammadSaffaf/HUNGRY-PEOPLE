const express =require('express');
const app = express();
const PORT =2220
app.use(express.static('public'))
app.set('view engine' , 'ejs')


app.get('/' ,(req,res) =>{
    res.render('index',{title:'Home/About'})
})




app.listen(PORT,() => console.log(`erver running on http://localhost:${PORT}`))