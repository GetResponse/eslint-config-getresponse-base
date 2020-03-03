module.exports = {
    plugins: ['jest'],
    env: {
        jest: true,
    },
    rules: {
        'jest/consistent-test-it': ['error', {
            fn: 'test',
            withinDescribe: 'it',
        }],
        'jest/expect-expect': ['error'],
        'jest/lowercase-name': ['warn', {
            ignore: ['describe'],
        }],
        'jest/no-alias-methods': ['off'],
        'jest/no-commented-out-tests': ['error'],
        'jest/no-disabled-tests': ['warn'],
        'jest/no-duplicate-hooks': ['error'],
        'jest/no-expect-resolves': ['error'],
        'jest/no-export': ['error'],
        'jest/no-focused-tests': ['warn'],
        'jest/no-hooks': ['off'],
        'jest/no-identical-title': ['error'],
        'jest/no-if': ['warn'],
        'jest/no-jasmine-globals': ['error'],
        'jest/no-jest-import': ['warn'],
        'jest/no-large-snapshots': ['off'],
        'jest/no-mocks-import': ['error'],
        'jest/no-standalone-expect': ['error'],
        'jest/no-test-callback': ['warn'],
        'jest/no-test-prefixes': ['warn'],
        'jest/no-test-return-statement': ['error'],
        'jest/no-truthy-falsy': ['warn'],
        'jest/no-try-expect': ['error'],
        'jest/prefer-called-with': ['off'],
        'jest/prefer-expect-assertions': ['off'],
        'jest/prefer-hooks-on-top': ['warn'],
        'jest/prefer-inline-snapshots': ['off'],
        'jest/prefer-spy-on': ['off'],
        'jest/prefer-strict-equal': ['off'],
        'jest/prefer-to-be-null': ['warn'],
        'jest/prefer-to-be-undefined': ['warn'],
        'jest/prefer-to-contain': ['warn'],
        'jest/prefer-to-have-length': ['warn'],
        'jest/prefer-todo': ['warn'],
        'jest/require-to-throw-message': ['off'],
        'jest/require-top-level-describe': ['warn'],
        'jest/valid-describe': ['error'],
        'jest/valid-expect': ['error'],
        'jest/valid-expect-in-promise': ['error'],
        'jest/valid-title': ['warn'],
    },
};
