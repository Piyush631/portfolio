const express = require('express');
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');

const app=express();
app.use(express.static("style"));

app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    
});
app.post("/",function(req,res)
{
    const comn=req.body.message;
    const na=req.body.nameOfPerson;
    var transpoter=nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'piyushkang433@gmail.com',
            pass: 'kangra@123'

        }
    })
    var mailOption={
        from: 'piyushkang433@gmail.com',
        to:'req.body.emailOfPerson',
        cc:'piyushkang433@gmail.com',
        subject:'Thanks for feedback' + na,
        text: 'Thanks For message you have sent' +comn


    };
    transpoter.sendEmail(mailOption,function(error,info)
    {
        if(error)
        {
            console.log(error);
        }else{
            res.redirect('/');
            console.log("email  sent" +info.response);
        }
    })
  
})


app.listen(3000,function()
{
    console.log("server start at 3000");

})