import del from 'del';
import paths from '../paths';

const clean = () => del(paths.clean.dir);

export default clean;
