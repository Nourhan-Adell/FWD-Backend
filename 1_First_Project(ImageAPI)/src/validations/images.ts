import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateResize = (req: Request, res: Response, next: NextFunction) => {
  console.log('req.query', req.query);
  const schema = Joi.object({
    width: Joi.string().pattern(new RegExp('^[0-9]+$')).required(),
    height: Joi.string().pattern(new RegExp('^[0-9]+$')).required(),
    name: Joi.string().required()
  });

  const result = schema.validate(req.query);
  if (result.error) {
    res.status(400).json({ message: result.error.message });
    return;
  }
  return next();
};
