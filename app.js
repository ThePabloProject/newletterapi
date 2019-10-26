
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const http = require("http");
const httpServer = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('fonts'));
const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE, GET, POST, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.header("Content-Security-Policy");

  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.get('/test',(req,res)=>{
    console.log(req);
    return res.status(200).json({version :'1.0',app:'wigglypuff'});
  })
  app.use(allowCrossDomain);

  app.get('/email',(req,res)=>{
      console.log(req.query.email);
      let emailId=req.query.email;
      if(emailId){
      emailSender(emailId,res);
    }
    else{
        res.status(500).json({msg:'email not allowed'})
    }
  })


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'henna.vij@expatorbit.com',
    pass: 'Lovsun@1243',
  }});

  httpServer.listen(port, () => {
    console.log(`App is listening on  port no : ${port}`);
    console.log(`the process id is ${process.pid}`);
    console.log(process.env.APP_ENV);
  });

const emailSender =(email,res)=>{
    transporter.sendMail({
        from:`Henna Vij <henna.vij@expatorbit.com>`,
        to:email,
        bcc:["info@expatorbit.com","divya.anshu30@gmail.com","henna.vij@expatorbit.com"],
        subject:'Diwali Wishes from Expat Orbit',
        html:`<!DOCTYPE html>
        <html style="width: 100% !important;margin: 0 auto !important;padding: 0 !important;height: 100% !important;">
        <head>
                <meta charset="UTF-8">
                <meta name="author" content="Expat Orbit">
                <meta content="width=device-width, initial-scale=1" name="viewport">
                <meta name="x-apple-disable-message-reformatting"> 
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet">
        <title>Expat Orbit</title>
        <style type="text/css">
        html{
            width:600px;
            margin:0px auto;
        }
        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }
        .happy-text p{
            font-size: 24px;font-weight: 800;
        }
        .happy-text{
            margin-top: 18px;font-size: 18px;
        }
        body{
            color: #fe4a00;
            max-width: 600px;
            display: block;
            text-align: center;
        }
        html,body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
        }
        .logo-cstm{
            margin-top: 18px;
        }
        .logo{
            position: fixed;
            width: 600px;
            z-index: -100;
            display: block;
            height: 800px;
            margin: 0px auto;
            left: 0;
            right: 0;
            min-height: 800px;
            height: 800px;
        }
        p{
            color:#6b3300;
            
            font-family: 'Montserrat' , sans-serif;
            margin: 0px auto;
            text-align: center;
            font-size: 16px;
        }
        h2 {
            margin: 22px auto;
            text-align: center;
            font-size: 16px;
            font-family: 'Montserrat' , sans-serif;
            font-weight: 700;
            width: 100%;
        }
        a.btn {
            justify-content: center;
            border: 1px solid #6b3300;
            width: 100px;
            padding: 5px 10px;
            margin: 0 auto;
            display: block;
            font-weight: 800;
            border-radius: 8px;
            font-family: Montserrat;
            color:#6b3300;
        text-decoration: none;
        }
            .happy {
            width: 100%;
            margin-top: 2vh;
        }
        .happy img{
            position: relative;
            width: 40%;
        }
        .para{
            width: max-content;
            
        }
        p.semi{
            font-size: 15px;
            font-weight: 600;
            margin: 14px 0px;
        }
        p.just{
            font-size: 14px;
        
        }
        .image {
            margin-top: 18px;
        }
        .diya {
            width: 33%;
        }
        .top{
            position: absolute;
            left: 0;
            right: 0;
            top:0;
            margin: 0px auto;
            display: block;
            width: 600px;
            text-align: center;
            z-index: 400;
            padding-bottom: 20px;
        }
        .bgggg{
            z-index: 0;
              position: absolute;
              left: 0;
              margin: 0px auto;
              display: block;
              right: 0;
              bottom: 0;
            top: 0;
        }
        .im {
            color: inherit !important;
        }
        img.g-img + div {
            display: none !important;
        }
        </style>
        </head>
        <body style="color: #fe4a00;max-width: 600px;display: block;text-align: center;margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;">
            <!-- <img class="bgggg" style="position: absolute!important; z-index:-100;" src="https://i.ibb.co/nzZRvLh/background1generic.png" alt="" 
              /> -->
              <div class="top" style="position: absolute;z-index: 100;left: 0;right: 0;top: 0;margin: 0px auto;display: block;width: 600px;text-align: center;padding-bottom: 20px;">
          <div>
              <img src="https://i.ibb.co/vY9wLvb/expatlogo.png" alt="" class="logo-cstm" style="margin-top: 18px;">
              <div class="happy-text" style="margin-top: 18px;font-size: 18px;">
                  <p style="color: #6b3300;font-family: 'Montserrat' , sans-serif;margin: 0px auto;text-align: center;font-size: 24px;font-weight: 800;">Team Expat Orbit Wishes you</p>
                  <p style="color: #6b3300;font-family: 'Montserrat' , sans-serif;margin: 0px auto;text-align: center;font-size: 24px;font-weight: 800;">and your family a very</p>
              </div>
          <div class="happy" style="width: 100%;margin-top: 2vh;">
              <img src="https://i.ibb.co/DbB9Yd9/diwlaitext.png" alt="" style="position: relative;width: 40%;">
          </div>
          <h2 style="margin: 22px auto;text-align: center;font-size: 16px;font-family: 'Montserrat' , sans-serif;font-weight: 700;width: 100%;">
              May the festival of lights continue adding sparkle to your life.
          </h2>
          <p style="margin-bottom: 5px;color: #6b3300;font-family: 'Montserrat' , sans-serif;margin: 0px auto;text-align: center;font-size: 16px;">When in India, Diwali is a festival you don't want to miss.</p><p style="color: #6b3300;font-family: 'Montserrat' , sans-serif;margin: 0px auto;text-align: center;font-size: 16px;">
          </p><p style="color: #6b3300;font-family: 'Montserrat' , sans-serif;margin: 0px auto;text-align: center;font-size: 16px;">Make the most of the celebrations by revelling with your Indian friends</p>
          <p style="color: #6b3300;font-family: 'Montserrat' , sans-serif;margin: 0px auto;text-align: center;font-size: 16px;">and participating in rituals as much as you can</p>
          <p class="semi" style="color: #6b3300;font-family: 'Montserrat' , sans-serif;margin: 14px 0px;text-align: center;font-size: 15px;font-weight: 600;">To learn  more about the history and customs of Diwali,</p>
          <a class="btn" href="https://expatorbit.com/blog/a-guide-to-celebrating-diwali-the-indian-festival-of-lights/" style="justify-content: center;border: 1px solid #6b3300;width: 100px;padding: 5px 10px;margin: 0 auto;display: block;font-weight: 800;border-radius: 8px;font-family: Montserrat;color: #6b3300;text-decoration: none;">Read More</a>
          </div>
          <div class="image" style="margin-top: 18px;">
              <img class="diya" src="https://i.ibb.co/b1Sytmj/diya.png" alt="deepak" style="width: 33%;">
          </div>
          <div class="bottom">
              <p style="color: #6b3300;font-family: 'Montserrat' , sans-serif;margin: 0px auto;text-align: center;font-size: 16px;"> Follow us</p>
              <div class="icons">
                  <a href="https://www.facebook.com/expatorbit/"><img src="https://i.ibb.co/zRb9cfk/icons8-facebook-100-1.png" alt="" width="46px"></a>
                  <a href="https://www.linkedin.com/company/expat-orbit/"><img src="https://i.ibb.co/jzfBdCn/icons8-linkedin-circled-96.png" alt="" width="46px"></a>
              </div>
          </div>
        </div>
          </body>
          </html>`
      },(err,info)=>{
      console.log(err);
      if(err){
          res.status(500).json({err:err})
      }
      else{
        res.status(200).json({msg:info})
      }
      console.log(info);
      })
}