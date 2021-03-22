const express = require('express')
const bodyParser = require('body-parser');
const app= express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


/*
app.get('/api/hello',(req,res)=>{
    res.send({message:'Hello Express!'});
});
*/
app.get('/api/customers',(req,res)=>{
   res.send([
    {
    'id':1,
    'img': 'https://placeimg.com/64/64/2',
    'name':'김민준3222222',
    'birthday':'970808',
    'gender':'남자',
    'job':'대학생',
  },
  {
    'id':2,
    'img': 'https://placeimg.com/64/64/5',
    'name':'이승현씨',
    'birthday':'990808',
    'gender':'여자',
    'job':'고등학생',
  }
  ]) ;
})
app.listen(port,()=>console.log(`서버 온 ${port}`));