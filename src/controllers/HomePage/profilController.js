import DBConnection from "../../configs/DBConnection";
const bcrypt = require('bcryptjs');



let getProfilPage = (req, res) => {
    res.render('profil')
    console.log(req.session)
    
};



let UPDATE_PROFIL = (req, res) => {
    var id = req.session.data.id;
    let userItem = {
        name: req.body.name,
        surname: req.body.surname,
        graduate: req.body.graduate,
        experience_lvl: req.body.experience_lvl,
        preffered_langage: req.body.preffered_langage,
        language_spoken: req.body.language_spoken,
        skills: req.body.skills,
        hobbies: req.body.hobbies,
        educational_path: req.body.educational_path,
        professional_career: req.body.professional_career,
    };
    var sql = `UPDATE users_informations SET ? WHERE id=${id}`;
    DBConnection.query(sql, userItem, function (err, data) {
    if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
    });
    res.redirect("/Home");
}



module.exports = {
    getProfilPage: getProfilPage,
    UPDATE_PROFIL: UPDATE_PROFIL
};

