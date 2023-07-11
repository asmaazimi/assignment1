//app.js, Balkesa Azimi-301296835  Date: Sunday, June 4, 2023-->

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('index');
});
app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/projects', (req, res) => {
    res.render('projects');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(process.env.PORT || 3000);