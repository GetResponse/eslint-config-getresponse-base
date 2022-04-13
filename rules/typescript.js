module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/brace-style': ['warn'],
    camelcase: ['off'],
    '@typescript-eslint/comma-spacing': ['warn'],
    'default-param-last': ['off'],
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'func-call-spacing': ['off'],
    '@typescript-eslint/func-call-spacing': ['warn'],
    indent: ['off'],
    '@typescript-eslint/indent': ['warn', 4, { SwitchCase: 1 }],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/member-naming': ['off'],
    '@typescript-eslint/member-ordering': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    'no-array-constructor': ['off'],
    '@typescript-eslint/no-array-constructor': ['error'],
    'no-dupe-class-members': ['off'],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-dynamic-delete': ['error'],
    'no-empty-function': ['off'],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-extra-non-null-assertion': ['off'],
    '@typescript-eslint/no-extra-parens': ['off'],
    'no-extra-semi': ['off'],
    '@typescript-eslint/no-extra-semi': ['warn'],
    '@typescript-eslint/no-extraneous-class': ['off'],
    '@typescript-eslint/no-for-in-array': ['off'],
    'no-magic-numbers': ['off'],
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreEnums: true,
      },
    ],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['warn'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-parameter-properties': ['off'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/no-this-alias': ['off'],
    'no-unused-expressions': ['off'],
    '@typescript-eslint/no-unused-expressions': [
      'warn',
      {
        allowTernary: true,
      },
    ],
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        enums: true,
        variables: true,
        typedefs: false,
      },
    ],
    '@typescript-eslint/no-useless-constructor': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/prefer-function-type': ['warn'],
    '@typescript-eslint/prefer-optional-chain': ['off'],
    quotes: ['off'],
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/require-array-sort-compare': ['off'],
    semi: 'off',
    '@typescript-eslint/semi': ['warn', 'always'],
    'space-before-function-paren': ['off'],
    '@typescript-eslint/space-before-function-paren': ['warn', { anonymous: 'always', named: 'never' }],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/switch-exhaustiveness-check': ['off'],
    '@typescript-eslint/typedef': ['off'],
    'no-redeclare': ['off'],
    '@typescript-eslint/no-redeclare': ['error'],
    'no-shadow': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/array-type': [
          'warn',
          {
            default: 'array-simple',
          },
        ],
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        '@typescript-eslint/await-thenable': ['off'],
        '@typescript-eslint/ban-ts-comment': ['error'],
        '@typescript-eslint/ban-types': ['error'],
        '@typescript-eslint/consistent-type-assertions': ['error'],
        '@typescript-eslint/consistent-type-definitions': ['off'],
        '@typescript-eslint/generic-type-naming': ['off'],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/no-floating-promises': ['off'],
        '@typescript-eslint/no-for-in-array': ['off'],
        '@typescript-eslint/no-implied-eval': ['off'],
        '@typescript-eslint/no-inferrable-types': [
          'warn',
          {
            ignoreParameters: true,
          },
        ],
        '@typescript-eslint/no-misused-promises': ['off'],
        '@typescript-eslint/no-namespace': ['error'],
        '@typescript-eslint/no-throw-literal': ['off'],
        '@typescript-eslint/no-type-alias': ['off'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['off'],
        '@typescript-eslint/no-unnecessary-condition': [
          'off',
          {
            ignoreRhs: true,
          },
        ],
        '@typescript-eslint/no-unnecessary-qualifier': ['off'],
        '@typescript-eslint/no-unnecessary-type-arguments': ['off'],
        '@typescript-eslint/no-unnecessary-type-assertion': ['off'],
        '@typescript-eslint/no-unused-vars-experimental': ['off'],
        '@typescript-eslint/prefer-as-const': ['warn'],
        '@typescript-eslint/prefer-for-of': ['warn'],
        '@typescript-eslint/prefer-includes': ['off'],
        '@typescript-eslint/prefer-namespace-keyword': ['error'],
        '@typescript-eslint/prefer-nullish-coalescing': ['off'],
        '@typescript-eslint/prefer-optional-chain': ['warn'],
        '@typescript-eslint/prefer-readonly': ['off'],
        '@typescript-eslint/prefer-regexp-exec': ['off'],
        '@typescript-eslint/prefer-string-starts-ends-with': ['off'],
        '@typescript-eslint/promise-function-async': ['off'],
        '@typescript-eslint/require-await': ['off'],
        '@typescript-eslint/restrict-plus-operands': ['off', { checkCompoundAssignments: true }],
        '@typescript-eslint/restrict-template-expressions': [
          'off',
          {
            allowBoolean: true,
            allowNullable: true,
            allowNumber: true,
          },
        ],
        '@typescript-eslint/return-await': ['off'],
        '@typescript-eslint/triple-slash-reference': ['error'],
        '@typescript-eslint/type-annotation-spacing': ['warn'],
        '@typescript-eslint/typedef': [
          'warn',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: false,
            objectDestructuring: false,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: false,
          },
        ],
        '@typescript-eslint/unbound-method': ['off'],
        '@typescript-eslint/unified-signatures': ['off'],
      },
    },
  ],
};
