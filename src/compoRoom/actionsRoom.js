const processRoom = require('./processRoom');
const Chambre = require('./modelsRoom');

module.exports = {

    AjouterChambre(req, res) {
        console.log(req.body),
        processRoom.ajouterChambre(req)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    afficherUneChambre(req, res) {
        processRoom.afficherUneChambre(req.params.id)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    afficherTteChambre(req, res) {
        processRoom.afficherTteChambre(req, res)
            .then((result) => {
                console.log(result)
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    supprimerChambre(req, res) {
        processRoom.supprimerChambre(req.params.id)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

}
