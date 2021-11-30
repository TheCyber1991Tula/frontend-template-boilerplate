module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'arrow-body-style': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
        'implicit-arrow-linebreak': ['error', 'beside'],
        indent: ['error', 4],
        'lines-around-directive': ['error', 'never'],
        'no-alert': 'off',
        'no-console': 'off',
        'no-eval': 'error',
        'no-extra-semi': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-unused-vars': 'off',
        'prefer-template': 'error',
        'react/jsx-indent': [4, 4, { checkAttributes: false }],
        'quote-props': 'off',
        quotes: ['error', 'single'],
        strict: 'off',
    },
};
