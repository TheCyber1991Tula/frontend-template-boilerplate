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
        'no-alert': 'off',
        'no-eval': 'error',
        'no-console': 'off',
        'strict': 'off',
        'indent': ['error', 4],
        'quote-props': 'off',
        'quotes': ['error', 'single'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'arrow-parens': ['error', 'as-needed'],
        'lines-around-directive': ['error', 'never'],
    },
};
