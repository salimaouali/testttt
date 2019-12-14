const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var hotelSchema = new Schema (
    {
        nameHotel: {type: String, required: true},
        adressHotel:{type:String, required:true},
        CPHotel:{type: Number},
        cityHotel:{type:String},
        telHotel: {type:String}
    }
);

hotelSchema.virtual('name').get(()=>{
    return (this.nameHotel);
})

hotelSchema.virtual('url').get(()=>{
    return '/hotels'
})

module.exports = mongoose.model('Hotel',hotelSchema);
