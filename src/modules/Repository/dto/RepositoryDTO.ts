const mapper = require('js-model-mapper')

const RepositoryDTO = mapper([
    'title',
    'url',
    'techs.tech',
    'likes',
    'user.username'
])

export default RepositoryDTO