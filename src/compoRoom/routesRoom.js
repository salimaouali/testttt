const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")

const actionRoom = require('./actionsRoom');


router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json)

router.get("/showallrooms",actionRoom.afficherTteChambre)
router.get("/showoneroom",actionRoom.afficherUneChambre)
router.post("/postoneroom",actionRoom.AjouterChambre)
router.put("/putoneroom/:idRoom")
router.delete("/deleteoneroom/:idRoom",actionRoom.supprimerChambre)

module.exports= router;