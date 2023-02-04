import Express from 'express';
const router = Express.Router();

import mainControllers from '../controllers/main';
import imageControllers from '../controllers/images';

router.use('/', mainControllers);
router.use('/images', imageControllers);

export default router;
