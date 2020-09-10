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
            jsx: true,
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
                lib: ['ESNext', 'DOM', 'DOM.Iterable', 'ES6', 'ES7', 'WebWorker', 'ScriptHost'],
                warnOnUnsupportedTypeScriptVersion: false,
            },
        },
        {
            files: [
                '*.test.ts',
                '*.test.tsx',
                '**/__mocks__/**/*.ts',
                '**/__mocks__/**/*.tsx',
                '*.spec.ts',
                '*.spec.tsx',
                '*.test-e2e.ts',
                '*.test-e2e.tsx',
                '*.spec-e2e.ts',
                '*.spec-e2e.tsx',
            ],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['off'],
                '@typescript-eslint/typedef': ['off'],
                '@typescript-eslint/no-magic-numbers': ['off'],
                '@typescript-eslint/no-empty-function': ['off'],
                '@typescript-eslint/no-extraneous-class': ['off'],
            },
            parser: '@typescript-eslint/parser',
        },
    ],
    ignorePatterns: ['node_modules/', 'coverage/', 'public/', 'dist/', 'build/', '**/__snapshots__'],
};
