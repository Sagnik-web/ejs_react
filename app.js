const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.render('index', { title: 'EJS and React' });
});

app.get('/',(req,res)=>{
    res.render('about',{name:"Sagnik Biswas",email:"sagnik@email.com"})
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
