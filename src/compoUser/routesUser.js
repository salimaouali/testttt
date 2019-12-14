const router = require('express').Router();
const bodyParser= require("body-parser")

router.use(bodyParser.json());
const actionsUser = require('./actionsUser');


router.post('/users/register',actionsUser.register); 

router.post('/users/login',actionsUser.login);
router.post('/users/decrypt',actionsUser.decrypt);

module.exports= router;




