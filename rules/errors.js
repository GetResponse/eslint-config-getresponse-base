module.exports = {
    rules: {
        // Enforce “for” loop update clause moving the counter in the right direction
        // http://eslint.org/docs/rules/for-direction
        'for-direction': 'error',

        // Enforces that a return statement is present in property getters
        // http://eslint.org/docs/rules/getter-return
        'getter-return': ['error', {allowImplicit: true}],
        'no-await-in-loop': ['warn'],
        'no-compare-neg-zero': ['error'],
        'no-cond-assign': ['error'],
        'no-console': ['error'],
        'no-constant-condition': ['off'],
        'no-control-regex': ['off'],
        'no-debugger': ['error'],
        'no-dupe-args': ['error'],
        'no-dupe-keys': ['error'],
        'no-duplicate-case': ['error'],
        'no-empty': ['warn', {'allowEmptyCatch': true}],
        'no-empty-character-class': ['warn'],
        'no-ex-assign': ['error'],
        'no-extra-boolean-cast': ['warn'],
        'no-extra-parens': ['off'],
        'no-extra-semi': ['error'],
        'no-func-assign': ['error'],
        'no-inner-declarations': ['error'],
        'no-invalid-regexp': ['warn'],
        'no-irregular-whitespace': ['error'],
        'no-obj-calls': ['error'],
        'no-prototype-builtins': ['off'],
        'no-regex-spaces': ['off'],
        'no-sparse-arrays': ['warn'],
        'no-template-curly-in-string': ['error'],
        'no-unexpected-multiline': ['warn'],
        'no-unreachable': ['error'],
        'no-unsafe-finally': ['off'],
        'no-unsafe-negation': ['error'],
        'use-isnan': ['error'],
        'valid-jsdoc': ['warn', {
            'requireReturnDescription': false,
            'requireParamDescription': false,
            'requireReturn': false,
        }],
        'valid-typeof': ['error'],
    },
};
