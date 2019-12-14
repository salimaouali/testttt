const colHotel = require('./modelsHotel');
const ObjectId = require('mongodb').ObjectID

module.exports={
    

    
    processAddOneHotel:(newHotel)=>{
        return new Promise((resolve) => {
          
            newHotel.save((err, hotel) => {
                if (err)
                    resolve(400);
                resolve('Hotel posted !/n' + hotel);
            });
        });
    }

}