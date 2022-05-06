const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/usuario");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'email'},(email,password,done)=> {
                User.findOne({email : email})
                .then((user)=>{
                 if(!user) {
                    return done(null,false,{message : 'Email não existe!'});
                 }
                })
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
    }); 
}; 