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
        'import/no-unresolved': ['off'],
        'import/named': ['warn'],
        'import/default': ['off'],
        'import/dynamic-import-chunkname': ['error', {
            webpackChunknameFormat: '[a-z0-9-]*',
        }],
        'import/namespace': ['error'],
        'import/no-restricted-paths': ['warn'],
        'import/no-absolute-path': ['error'],
        'import/no-dynamic-require': ['off'],
        'import/no-interal-modules': ['off'],
        'import/no-webpack-loader-syntax': ['error'],
        'import/export': ['warn'],
        'import/exports-last': ['off'],
        'import/group-exports': ['off'],
        'import/no-cycle': ['error', {
            maxDepth: 1,
        }],
        'import/no-default-export': ['off'],
        'import/no-internal-modules': ['off'],
        'import/no-relative-parent-imports': ['off'],
        'import/no-self-import': ['error'],
        'import/no-useless-path-segments': ['warn'],
        'import/no-named-as-default': ['off'],
        'import/no-named-as-default-member': ['off'],
        'import/no-deprecated': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/no-mutable-exports': ['warn'],
        'import/unambiguous': ['off'],
        'import/no-commonjs': ['off'],
        'import/no-amd': ['warn'],
        'import/no-nodejs-modules': ['off'],
        'import/first': ['warn'],
        'import/no-duplicates': ['error'],
        'import/no-namespace': ['off'],
        'import/extensions': ['off'],
        'import/order':
            ['off', {'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 'newlines-between': 'always'}],
        'import/newline-after-import': ['warn'],
        'import/prefer-default-export': ['off'],
        'import/max-dependencies': ['off'],
        'import/no-unassigned-import': ['off'],
        'import/no-named-default': ['off'],
        'import/no-anonymous-default-export': ['off'],
    },
};
