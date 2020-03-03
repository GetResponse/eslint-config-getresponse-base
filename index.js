module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/es6',
        './rules/jest',
        './rules/node',
        './rules/style',
        './rules/typescript',
        './rules/variables',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2020,
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
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        {
            files: ['*.test.ts', '*.test.tsx', '**/__mocks__/**/*.ts', '**/__mocks__/**/*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['off'],
                '@typescript-eslint/typedef': ['off'],
                '@typescript-eslint/no-magic-numbers': ['off'],
                '@typescript-eslint/no-empty-function': ['off'],
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.eslint.json',
            },
        },
    ],
    ignorePatterns: ['node_modules/', 'coverage/', 'public/', 'dist/', 'build/', '**/__snapshots__'],
};
