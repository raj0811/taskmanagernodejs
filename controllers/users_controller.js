const User = require("../models/user")


module.exports.signup = function(req,res){

    if(req.isAuthenticated()){
        return res.render('profile',{
            title: 'profile'
        })

    }
    return res.render('user_sign_up',{
        title: "Signup"
    })
}

module.exports.signin = function(req,res){

    if(req.isAuthenticated()){
        return res.render('home',{
            title: 'profile'
        })

    }
    return res.render('user_sign_in',{
        title: "Signin"
    })
}


// get signup data

module.exports.create = async function(req, res) {
    try {
      if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
      }
  
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        const newUser = await User.create(req.body);
        return res.redirect('/users/sign-in');
      } else {
        return res.redirect('back');
      }
    } catch (error) {
      console.log("error while signing up:", error);
      return res.redirect('back');
    }
  }
  



// create session


module.exports.createSession = function(req,res){
  req.flash('success','Logged in');
    return res.redirect('/');
}


module.exports.destroySession = function (req, res, next) {
  req.logout(function (err) {
      if (err) {
          return next(err);
      }
      res.redirect('/')

  });

}