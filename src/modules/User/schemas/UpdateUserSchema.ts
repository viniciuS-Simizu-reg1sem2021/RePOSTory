import { Joi } from 'celebrate';

const UpdateUserSchema = Joi.object({
    username: Joi.string(),
    email: Joi.string(),
    password: Joi.string()
})

export default UpdateUserSchema