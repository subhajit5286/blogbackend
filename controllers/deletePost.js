const Post = require('../database/models/Post')
const User = require('../database/models/User')
 
module.exports = async (req, res) => {
    User.findById(req.session.userId, (error, user) => {
        if (user) {
            
                Post.findByIdAndRemove(req.params.id,err => {
                   if (err) return res.send('err');
                   
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
}