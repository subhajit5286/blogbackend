const Post = require('../database/models/Post')
const User = require('../database/models/User')

module.exports = (req, res) => {
    
    User.findById(req.session.userId, (error, user) => {
        if (user) {
            Post.create(req.body, (error, post) => {
                    // res.redirect('/')
             if (error) return res.send(500, err);
                    
             }) 
                
        return res.send("success")
    }
    if (!user) {
        //console.log("success1")
        res.send("invalid user")
    }
        if (error) {
            console.log("ERROR")
            res.send("error")
        }
        }) 

    
    
    //     Post.create(req.body, (error, post) => {
    //    // res.redirect('/')
    //    if (error) return res.send(500, err);
        
    //     }) 
    
    //     return res.send("success")
    
}