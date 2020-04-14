const express = require('express');
 
const app = new express();

const path = require('path');
//const { engine } = require('express-edge');
//const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');  const Post = require('./database/models/Post');

mongoose.set("useFindAndModify", false);

mongoose.connect('mongodb+srv://subhajit:subhajit1234@cluster0-nk2jp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

app.use(express.static('public'));



//app.use(engine);
///app.set('views', `${__dirname}/views`);
// app.use(expressEdge.engine);
// app.set('views', __dirname + '/views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
//see all post
app.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.send(posts)
});
//posts/new
// app.get('/postsa', (req, res) => {
//     res.render('create')
// });
//posts/store
app.post('/postsb', (req, res) => {
    Post.create(req.body, (error, post) => {
       // res.redirect('/')
    })
});

app.get('/post:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
//console.log(post);
res.send(post)
})
//delete
app.delete('/post:id', async (req, res) => {
     Post.findByIdAndRemove(req.params.id,err => {
        if (err) return res.send(500, err);
        
        })
        return res.send("success")
})
app.put('/post:id', async (req, res) => {
    Post.findByIdAndUpdate(req.params.id,req.body).then (function() {
       Post.findById(req.params.id).then (function(post) {
       res.send(post)
       })
       
})
});
var port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('App listening on port 4000')
});