module.exports = (req, res) => {
    req.session.destroy(() => {
        res.send('logged out successfully')
    })
}