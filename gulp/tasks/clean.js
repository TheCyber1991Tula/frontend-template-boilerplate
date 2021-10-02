const del = require('del');
const paths = require('../paths');

const clean = () => del(paths.clean.dir);

export default clean;
