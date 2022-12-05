const User=require('../models/user')
// render the sign up page
module.exports.signUp = function(req, res){
    // if (req.isAuthenticated()){
    //     return res.redirect('/users/profile');
    // }


    return res.render('SingUp', {
        title: " Blog | Sign Up"
    })
}
// render the sign in page
module.exports.signIn = function(req, res){

    // if (req.isAuthenticated()){
    //     return res.redirect('/users/profile');
    // }
    return res.render('SignIn', {
        title: "Blog | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){req.flash('error', err); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){req.flash('error', err); return}

                return res.redirect('/user/sign-in');
            })
        }else{
            req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back');
        }
    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // req.flash('success', 'Logged in Successfully');
    return res.redirect('/main');
}

module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'You have logged out!');


    return res.redirect('/main');
}