const router = require('express').Router();
const { DoclogController } = require('../controllers/DoclogController');
const { createDoc } = require('../controllers/createDoc');
const { docDataReader } = require('../controllers/docDataReader');
const { enquirePatController } = require('../controllers/enquirePatController');
const { getTokensForToday } = require('../controllers/retrieveToken');

router.post('/logdoc',DoclogController)
router.post('/enqpat',enquirePatController);
router.post('/createdoc',createDoc);
router.post('/retdoc',docDataReader);
router.post('/rettoken',getTokensForToday);

module.exports = router;