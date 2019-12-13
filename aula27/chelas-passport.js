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
    req.logIn = function(user, errCb) {
      console.log(user)
      serializeUserCb(user, function(err, userSerialized) {
        console.log(userSerialized)
        rsp.cookie(SESSION_COOKIE_NAME, JSON.stringify(userSerialized))
      })
    }

    req.logOut = function(obj, errCb) {
      rsp.clearCookie(SESSION_COOKIE_NAME)
    }

    req.isAuthenticated = function() {
      return !!req.cookies[SESSION_COOKIE_NAME];
    }
    next()
  }
}


function session() {
  return function(req, rsp, next) {
    if(req.isAuthenticated()) {
      deserializeUserCb(JSON.parse(req.cookies[SESSION_COOKIE_NAME]), 
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