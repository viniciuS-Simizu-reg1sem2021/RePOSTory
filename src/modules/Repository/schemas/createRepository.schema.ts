import { Joi } from 'celebrate'

const createRepositorySchema = Joi.object({
    title: Joi.string().required(),
    url: Joi.string().required(),
    techs: Joi.array()
})

export default createRepositorySchema