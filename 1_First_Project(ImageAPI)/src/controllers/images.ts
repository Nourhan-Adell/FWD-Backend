import Express from 'express';
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

import { resize } from '../services/image';
import { validateResize } from '../validations/images';

const router = Express.Router();

const image_options = {
  root: path.join('images/thumb')
};

router.get('/', validateResize, async (req: Request, res: Response, next: NextFunction) => {
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);
  const filename = String(req.query.name);

  const mainImage: string = path.join(`images/${filename}.png`);
  const name: string = `${filename}_${width}_${height}.png`;
  const filePath: string = path.join('images/thumb', name);

  if (!fs.existsSync(filePath)) {
    console.log('File is not exist, Resizing...');
    await resize(mainImage, width, height, name);
  }
  res.sendFile(name, image_options);
});

module.exports = router;
