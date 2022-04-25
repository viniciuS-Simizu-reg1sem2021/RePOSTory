import { Joi } from 'celebrate';

const CreateUserSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})

export default CreateUserSchema