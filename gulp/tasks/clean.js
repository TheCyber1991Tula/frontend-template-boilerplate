const paths = require('../paths')
const del = require('del')

const clean = () => {
    return del(paths.clean.dir)
}

export default clean
