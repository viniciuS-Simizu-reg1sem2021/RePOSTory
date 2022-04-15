import { Joi } from "celebrate";

const CreateRepositorySchema = Joi.object({
    title: Joi.string().required(),
    url: Joi.string().required()
})

export default CreateRepositorySchema