const  express=require('express')
const  path=require('path')
const hbs=require('hbs')
const app=express()
const  port=process.env.PORT|| 8080;
app.use(express.static(path.join(__dirname, 'public')));


app.set('views',path.join(__dirname))
app.set('view engine',hbs)
app.use(express.static('image'));

app.get('/',function(req,res){
    res.render('Home.hbs')
    })


    app.get('/about',function(req,res){
        res.render('about.hbs')
        })

        app.get('/weather',function(req,res){
            res.render('weather.hbs')
            })
    
            app.get('*',function(req,res){
                res.render('error.hbs')
                })

app.listen(port,function(error){
    if(error)throw error
    console.log("server Created  Succesfully")
})