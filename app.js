
const nodemailer = require('nodemailer');
const Email = require('email-templates');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'divya.anshu30@gmail.com',
    pass: 'Uzumaki@30',
  }});
 

transporter.sendMail({
  from:`Divyanshu <divya.anshu30@gmail.com>`,
  to:'divyanshu@thepabloproject.io',
  bcc:["info@expatorbit.com"],
  subject:'Diwali Wishes from Expat Orbit',
  html:`<!DOCTYPE html>
  <html>
  <head>
          <meta charset="UTF-8">
          <meta name="author" content="Expat Orbit">
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="x-apple-disable-message-reformatting"> 
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet">
  <title>Expat Orbit</title>
  <style type="text/css">
  html{
      width:600px;
      margin:0px auto;
  }
  .happy-text p{
      font-size: 24px;font-weight: 800;
  }
  .happy-text{
      margin-top: 18px;font-size: 18px;
  }
  body{
      margin: 0px auto;
      color: #fe4a00;
      max-width: 600px;
      width: 600px;
      margin: 0px auto;
      display: block;
      text-align: center;
      background-position: center;
  }
  html,body {
      margin: 0 auto !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      background: #f1f1f1;
  }
  .logo-cstm{
      margin-top: 36px;
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
      display: flex;
      align-items: center;
      margin: 0px;
      justify-content: center !important;
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
      display: flex;
      align-items: center;
      justify-content: space-around;
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
  <body>
      <img class="bgggg" src="https://i.ibb.co/nzZRvLh/background1generic.png" alt="" 
        />
        <div class="top" align="texttop">
    <div>
        <img src="https://i.ibb.co/vY9wLvb/expatlogo.png" alt="" class="logo-cstm"/>
        <div class="happy-text" >
            <p >Team Expat Orbit Wishes you &</p>
            <p >& your family a very</p>
        </div>
    <div class="happy">
        <img src="https://i.ibb.co/DbB9Yd9/diwlaitext.png" alt="" />
    </div>
    <h2>
        May the festival of lights continue adding sparkle to your life.
    </h2>
    <p style="margin-bottom: 5px;">When in India, Diwali is a festival you don't want to miss.<p>
    <p>Make the most of the celebrations by revelling with your India</p>
    <p>& participating in rituals as much as you can</p>
    <p class="semi">To learn  more about the history and customs of Diwali,</p>
    <a class="btn"  href="https://expatorbit.com/blog/a-guide-to-celebrating-diwali-the-indian-festival-of-lights/">Read More</a>
    </div>
    <div class="image">
        <img class="diya" src="https://i.ibb.co/b1Sytmj/diya.png" alt="deepak"/>
    </div>
    <div class="bottom" style="display: flex;
    flex-direction: column;
    align-items: center;">
        <p> Follow us</p>
        <div class="icons" style="display: flex;
        align-items: center;">
            <a href="https://www.facebook.com/expatorbit/"><img src="https://i.ibb.co/zRb9cfk/icons8-facebook-100-1.png"  alt="" width="40px"/>facebook</a>
            <a href="https://www.linkedin.com/company/expat-orbit/"><img src="https://i.ibb.co/jzfBdCn/icons8-linkedin-circled-96.png" alt="" width="46px"/>LinkedIn</a>
        </div>
    </div>
  </div>
    </body>
    </html>`
},(err,info)=>{
console.log(err);
console.log(info);
})