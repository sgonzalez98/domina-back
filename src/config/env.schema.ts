import * as Joi from 'joi';

export default Joi.object({
  PORT: Joi.number().required(),
  MONGO_URI: Joi.string().required(),
  MONGO_DATABASE: Joi.string().required(),
});
