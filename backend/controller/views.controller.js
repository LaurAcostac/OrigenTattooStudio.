exports.showLandingAdmin = async (req, res) => {
    res.render('landingadmin')
}
exports.showLandingPage = async (req, res) => {
    res.render('landingpage')
}

exports.showFormRegister = async (req,res) => {
    res.render('registerclients')
}

exports.showFormLogin = async (req,res) => {
    res.render('loginclients')
}

exports.showTattoosCatalogue = async (req, res) => {
    res.render('tattooscatalogue')
}

exports.showPiercingsCatalogue = async (req, res) => {
    res.render('piercingscatalogue')
}