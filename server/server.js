const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const bcrypt = require('bcrypt')
 
require('dotenv').config()
 
const app = express()

const saltRounds = 12
 
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET, 
    saveUninitialized: false, 
    resave: false
}))
 
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(error => {
    console.log('error', error)
})

// app.use( express.static( `${__dirname}/../build` ) )

app.post('/register', (req, res) => {
    const db = app.get('db')
    const { username, password } = req.body
  
    bcrypt.hash(password, saltRounds).then(hashedPassword => {
        db.create_user([username, hashedPassword]).then(() => {
            req.session.user = { username } 
            res.json({user: req.session.user})
        }).catch(error => {
            console.log('create user error', error)
            res.status(500).json({message: 'something bad happened'})
        })
    })
})

app.post('/login', (req, res) => {
    const db = app.get('db')
    const { username, password } = req.body

    db.find_user([username]).then(user => {
        if (user.length) {
            bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                if (passwordsMatch) {
                    req.session.user = {user: user[0].username}
                    res.json({user: req.session.user})
                } else {
                    res.status(403).json({message: 'wrong password'})
                }
            })
        } else {
            res.status(403).json({message: 'not a valid username'})
        }
    }).catch(error => {
        console.log('find user error', error)
        res.status(500).json({message: 'something bad happened'})
    })
})

app.get('/user-data', (req, res) => {
    if (req.session.user){
        res.status(200).send(req.session.user)
    } else {
        res.status(403)
    }
})

app.post('/logout', (req, res) => {
    req.session.destroy()
    res.status(200).send()
})

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'))
// })
 
const port = process.env.SERVER_PORT
app.listen(port, () => console.log('listening on port ' + port))