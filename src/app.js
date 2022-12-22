const  express = require('express') ; 
const path = require('path') ; 
const app = express() ; 
const hbs = require('hbs') ; 

const PORT = process.env.PORT || 3000 ; 

require('./db/conn.js') ;
app.use(express.json()) ;
app.set('view engine' , 'hbs') ;  
app.set('views' , '../templates/views') ; 
hbs.registerPartials('../templates/partials') ; 
app.use(express.static('templates/img'));

// {/* <img src="bckground.jpg" alt="teeest" />  */}

app.get('/', (req,res)=>{ 
    res.render('index') ;    
}); 
app.get('/home', (req,res)=>{
    res.render('home') ;
}); 
app.get('/about', (req,res)=>{
    res.render('about') ;
}); 
app.get('/contact', (req,res)=>{
    res.render('contact') ;
}); 
 
app.listen(PORT , ()=>{
    console.log(`Server Running at ${PORT}`);
});

 