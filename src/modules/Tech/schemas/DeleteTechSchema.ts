import { Joi } from 'celebrate';

const DeleteTechSchema = Joi.object({
    id_repository: Joi.string().required(),
    tech: Joi.string().required()
})

export default DeleteTechSchema