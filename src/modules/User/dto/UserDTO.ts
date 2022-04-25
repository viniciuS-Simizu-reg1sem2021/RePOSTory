const mapper = require('js-model-mapper')

const UserDTO = mapper([
    'username',
    'repositories'
])

export default UserDTO
