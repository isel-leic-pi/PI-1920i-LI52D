module.exports = {
  initialize: initialize,
  session: session,
  serializeUser: serializeUser,
  deserializeUser: deserializeUser
}

const SESSION_COOKIE_NAME = "Session"

let serializeUserCb = function (user, done) {
  done(null, user)
}

let deserializeUserCb = function (user, done) {
  done(null, user)
}

function initialize() {
  return function(req, rsp, next) {
    req.logIn = function(user, cb) {
      console.log(user)
      serializeUserCb(user, function(err, userSerialized) {
        console.log(userSerialized)
        req.session.chelasPassport = userSerialized
        cb(err)
      })
    }

    req.logOut = function() {
      req.session.chelasPassport = null
      req.user = undefined
    }

    req.isAuthenticated = function() {
      return req.session.chelasPassport
    }
    next()
  }
}


function session() {
  return function(req, rsp, next) {
    if(req.isAuthenticated()) {
      deserializeUserCb(req.session.chelasPassport, 
        (err, user) => { 
          req.user = user
        } 
        )
      }
    next()
  }
}


function serializeUser(userSer) {
  serializeUserCb = userSer
}

function deserializeUser(userDeser) {
  deserializeUserCb = userDeser

}