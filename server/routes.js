var express = require('express');
var router = express.Router();
var servCtrl = require('./controllers/servCtrl');

//GET
router.get('/list', servCtrl.list);
router.get('/listOne/:id', servCtrl.listOne);

//PUT
router.put('/insert/:id', servCtrl.insert);
router.put('/turn/:id', servCtrl.turn);

//POST
router.post('/newMachine', servCtrl.newMachine);

//DELETE
router.delete('/delMachine/:id', servCtrl.delMachine);

module.exports = router;