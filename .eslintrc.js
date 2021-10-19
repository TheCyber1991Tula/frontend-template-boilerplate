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
        'no-eval': 'error',
        indent: ['error', 4],
        'quote-props': 'off',
        'implicit-arrow-linebreak': ['error', 'beside'],
        'arrow-parens': ['error', 'as-needed'],
    },
};
