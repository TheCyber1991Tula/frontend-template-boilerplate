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
        'implicit-arrow-linebreak': ['error', 'beside'],
        'indent': ['error', 4],
        'lines-around-directive': ['error', 'never'],
        'no-alert': 'off',
        'no-console': 'off',
        'no-eval': 'error',
        'no-extra-semi': 'off',
        'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
        'no-unused-vars': 'off',
        'prefer-template': 'error',
        'quote-props': 'off',
        'quotes': ['error', 'single'],
        'strict': 'off',
    },
};
