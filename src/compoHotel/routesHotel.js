const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const actionsHotel=require("./actionsHotel")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/showallhotels",actionsHotel.actionShowAllHotels)
router.get("/showonehotel",actionsHotel.actionShowOneHotel)
router.post("/postonehotel",actionsHotel.actionPostOneHotel)
router.put("/putonehotel/:idHotel",actionsHotel.actionUpdateOneHotel)
router.delete("/deleteonehotel/:idHotel",actionsHotel.actionDeleteOneHotel)

module.exports= router;