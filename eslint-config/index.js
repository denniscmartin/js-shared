module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'prefer-const': 'error',
        'no-undefined': 'error',
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_'
            }
        ],
        'no-console': 'warn',
        'no-var': 'error'
    }
};
