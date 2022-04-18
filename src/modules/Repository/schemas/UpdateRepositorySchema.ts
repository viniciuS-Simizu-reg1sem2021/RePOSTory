import { Joi } from "celebrate";

const UpdateRepositorySchema = Joi.object({
    title: Joi.string().required(),
    url: Joi.string().required()
})

export default UpdateRepositorySchema