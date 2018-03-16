module.exports = {
    createProfile: (req, res) => {
        const db =  req.app.get('db')
        const { name, breed, age, sex, url } = req.body
        const { user } = req.session

        db.create_profile([user.id, url, name, breed, age, sex]).then(() => {
            res.status(200).send('success')
        }).catch(error => console.log('create profile error', error))
    }, 
    getProfile: (req, res) => {
        const db =  req.app.get('db')
        const { user } = req.session

        db.get_profile([user.id]).then(profile => {
            res.status(200).json(profile)
        }).catch(error => console.log('get profile error', error))
    }
}