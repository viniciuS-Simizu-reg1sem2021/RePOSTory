import { Joi } from "celebrate";

const CreateRepositorySchema = Joi.object({
    user: Joi.string().required(),
    title: Joi.string().required(),
    url: Joi.string().required(),
    techs: Joi.array().items(Joi.string())
})

export default CreateRepositorySchema