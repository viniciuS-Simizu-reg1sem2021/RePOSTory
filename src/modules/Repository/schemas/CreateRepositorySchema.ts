import { Joi } from "celebrate";

const CreateRepositorySchema = Joi.object({
    title: Joi.string().required(),
    url: Joi.string().required(),
    techs: Joi.array().items(Joi.string())
})

export default CreateRepositorySchema