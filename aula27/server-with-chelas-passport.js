'use strict'

const path = require('path') 
const express = require('express') 
const morgan = require('morgan') 
const cookieParser = require('cookie-parser') 
const passport = require('./chelas-passport') 

const app = express()
app.use(morgan('dev'))

app.use(cookieParser())
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

app.post('/login', validateLogin)
app.put('/logout', logout)
app.use('/auth', verifyAuthenticated)

app.get('/auth/home', homeAuthenticated)
app.get('/home', homeNotAuthenticated)


const PORT = 1904;
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}/`))


//////////////////////////////////

function  showSessionCount(req, rsp) {
    req.session.count = (req.session.count+1) || 1;
    rsp.end(`Current count is ${req.session.count}`)
}


function homeAuthenticated(req, rsp) {
  rsp.end(`Hello ${req.user.username}`)
}

function homeNotAuthenticated(req, rsp) {
  rsp.end(`Hello unknown user`)
}



function validateLogin(req, rsp) {
  if(validateUser(req.body.username, req.body.password)) {
    console.log(req.body)
    req.logIn({
       username: req.body.username
    }, (err) => rsp.redirect('/home'))
    return rsp.redirect('/auth/home')
  }
  rsp.redirect('/login')

  function validateUser(){ return true; }

}

function verifyAuthenticated(req, rsp, next) {
  if(req.isAuthenticated())
     return next()
  rsp.status(403).send("Authenticate at '/login'")
}

function logout(req, rsp) {
  req.logOut()
  rsp.redirect('/home')
}



