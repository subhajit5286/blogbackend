const Post = require('../database/models/Post')
const User = require('../database/models/User')

module.exports = (req, res) => {
User.findById(req.session.userId, (error, user) => {
    if (user) {
        Post.find({username:user.username}, (error, post) => {
            if (post) {
            res.send(post)
        }
        if (!post) {
            
            res.send("no post found for this user")
        }
            if (error) {
                res.send("error")
            }
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
