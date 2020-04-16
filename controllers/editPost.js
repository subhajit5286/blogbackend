const Post = require('../database/models/Post')
const User = require('../database/models/User')
 
module.exports = async (req, res) => {
    User.findById(req.session.userId, (error, user) => {
        if (user) {
            Post.findByIdAndUpdate(req.params.id,req.body).then (function() {
                Post.findById(req.params.id).then (function(post) {
                res.send(post)
                })
                
         }).catch(function(err){
            res.send('err')
        })
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
    
}