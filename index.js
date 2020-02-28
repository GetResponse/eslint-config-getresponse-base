module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
        './rules/typescript',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    rules: {
        strict: ['off'],
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
        },
    ],
};
