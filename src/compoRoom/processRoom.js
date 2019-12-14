const mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId;
const Chambre = require('./modelsRoom');


module.exports = {

    ajouterChambre: (req) => {
        console.log(req.body);

        let chambre = new Chambre({
            
            numChambre : req.body.numChambre,
            // namtypeChambre: req.body.typeChambre,
            // SDB: req.body.SDB,
            
        
        });
        console.log(req.body)
        return new Promise((resolve, reject) => {
            chambre.save(function (err) {
                console.log(chambre);
                console.log(err)
                if (err) {

                    reject({ erreur: "La chambre ne peut pas être ajouté" });
                } else {
                    resolve(chambre);
                }
            })
        })
    },

    afficherUneChambre: (id) => {
        return new Promise((resolve, reject) => {
            Chambre.findOne({ _id: id }, (err, chambre) => {
                if (err) {
                    reject({ erreur: "Le chambre n'existe pas" });
                } else {
                    resolve(chambre);
                }
            });
        })
    },

     afficherTteChambre: () => {
        return new Promise((resolve, reject) => {
            Chambre.find((err, chambre) => {
                if (err) {
                    reject({ erreur: "aucune chambre" })
                } else {
                    resolve({ chambre })
                }
            })
        })
    },

    supprimerChambre: (id) => {
        return new Promise((resolve, reject) => {
            Chambre.findById({ _id: id }, function (err, chambre) {

                chambre.remove(function (err) {
                    if (err) {
                        reject("la chambre ne peut pas être supprimé");
                    } else {
                        resolve(chambre);
                    }
                })
            })
        })
    },

  }