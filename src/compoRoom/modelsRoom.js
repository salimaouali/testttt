const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let chambreSchema = new Schema (
    {
        numChambre : {type : String}
        // typeChambre :{enum: [ "simple", "double"]},
        // SDB : {enum : ["oui", "non"]}
            }
);

let Chambre = mongoose.model('Chambre', chambreSchema);
module.exports = Chambre; 