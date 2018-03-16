const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const session = require('express-session')
const massive = require('massive')
const multer = require('multer')
const bcrypt = require('bcrypt')
const AWS = require('aws-sdk')
 
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

// my endpoints
app.post('/api/profiles', controller.createProfile)
app.get('/api/profiles', controller.getProfile)

// bcrypt login stuff
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
                    req.session.user = {user: user[0].username, id: user[0].id}
                    res.json({user: req.session.user})
                    console.log(req.session.user)
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

// AWS S3 upload 
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION
})

const s3 = new AWS.S3()
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 52428800
    }
})

app.post('/upload', upload.single('image'), (req, res) => {
    const fileName = req.file.originalname.split(' ').join('+')
    s3.putObject({
        Bucket: process.env.BUCKET,
        Key: req.file.originalname,
        Body: req.file.buffer,
        ContentType: "image/png",
        ACL: 'public-read'
        }, (err) => {
        console.log('upload error', err)
        if (err) return res.status(400).send(err)
        res.send(`https://s3-${process.env.REGION}.amazonaws.com/${process.env.BUCKET}/${fileName}`)
    })
})

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'))
// })
 
const port = process.env.SERVER_PORT
app.listen(port, () => console.log('listening on port ' + port))