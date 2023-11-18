exports.showLandingPage = async (req, res) => {
    res.render('landingpage')
}

exports.showFormRegister = async (req,res) => {
    res.render('registerclients')
}

exports.showFormLogin = async (req,res) => {
    res.render('loginclients')
}

exports.showLandingPageAdmin = async (req, res) => {
    res.render('landingadmin')
}