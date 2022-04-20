import { Joi } from 'celebrate';

const CreateTechSchema = Joi.object({
    id_repository: Joi.string().required(),
    tech: Joi.string().required()
})

export default CreateTechSchema