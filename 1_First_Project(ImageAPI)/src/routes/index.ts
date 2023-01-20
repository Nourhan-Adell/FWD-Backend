import Express from 'express';
const router = Express.Router();

const mainControllers = require('../controllers/main');
const imageControllers = require('../controllers/images');

router.use('/', mainControllers);
router.use('/images', imageControllers);

module.exports = router;
