module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: [
        'import',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.json'],
            },
        },
        'import/extensions': [
            '.js',
            '.jsx',
        ],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
    rules: {
        'import/default': ['off'],
        'import/dynamic-import-chunkname': ['error', {
            webpackChunknameFormat: '[a-z0-9-]*',
        }],
        'import/export': ['warn'],
        'import/exports-last': ['off'],
        'import/extensions': ['off'],
        'import/first': ['warn'],
        'import/group-exports': ['off'],
        'import/max-dependencies': ['off'],
        'import/named': ['warn'],
        'import/namespace': ['error'],
        'import/newline-after-import': ['warn'],
        'import/no-absolute-path': ['error'],
        'import/no-amd': ['warn'],
        'import/no-anonymous-default-export': ['off'],
        'import/no-commonjs': ['off'],
        'import/no-cycle': ['error', {
            maxDepth: 1,
        }],
        'import/no-default-export': ['off'],
        'import/no-deprecated': ['off'],
        'import/no-duplicates': ['error'],
        'import/no-dynamic-require': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/no-interal-modules': ['off'],
        'import/no-internal-modules': ['off'],
        'import/no-named-as-default': ['off'],
        'import/no-named-as-default-member': ['off'],
        'import/no-named-default': ['off'],
        'import/no-named-export': ['off'],
        'import/no-namespace': ['off'],
        'import/no-nodejs-modules': ['off'],
        'import/no-relative-parent-imports': ['off'],
        'import/no-restricted-paths': ['warn'],
        'import/no-self-import': ['error'],
        'import/no-unassigned-import': ['off'],
        'import/no-unresolved': ['off'],
        'import/no-unused-modules': ['error', {
            unusedExports: true,
        }],
        'import/no-useless-path-segments': ['warn'],
        'import/no-webpack-loader-syntax': ['error'],
        'import/no-mutable-exports': ['warn'],
        'import/order':
            ['off', {'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 'newlines-between': 'always'}],
        'import/unambiguous': ['off'],
        'import/prefer-default-export': ['off'],
    },
};
