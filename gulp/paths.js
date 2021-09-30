const dist = '../dist'
const src = '../src/'

module.exports = {
    styles: {
        src: src + 'styles/*.scss',
        dest: dist
    },
    scripts: {
        src: src + 'scripts/*.js',
        dest: dist
    },
    html: {
        src: src + 'index.html',
        dest: dist
    },
    images: {
        src: src + 'img/*.{jpg,png,svg,gif,webp,ico}',
        dest: dist
    },
    clean: {
        dir: dist
    }
}

// *?
// *!
// TODO
//*
