const colHotel  = require('./modelsHotel');
const processHotel = require('./processHotel');

module.exports={
    actionShowAllHotels:(req,res)=>{
        processHotel.processShowAllHotels()
        .then((result)=>{
            if (result== 400) res.status(result).send("There was a problem finding the Hotel.")
            result.status(200).send(result)
        })
    },

    actionShowOneHotel:(req,res)=>{

    },

    actionPostOneHotel:(req,res)=>{
        let myHotel= new colHotel({
            nameHotel: req.body.nameHotel,
            adressHotel:req.body.adressHotel,
            CPHotel:req.body.CPHotel,
            cityHotel:req.body.cityHotel,
            telHotel:req.body.telHotel
        });
        processHotel.processAddOneHotel(myHotel).then((result)=>{
            if(result==400) res.status(result).send("There was a problem adding the informations to the database.")
            res.status(200).send(result)
        })
    },  

    actionUpdateOneHotel:(req,res)=>{

    },

    actionDeleteOneHotel:(req,res)=>{

    }
}