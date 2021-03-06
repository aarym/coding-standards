/*    __                                  __
 *   / _)  _  _   _ ) o  _   _           (_ \
 *  | |   (_ (_) (_(  ( ) ) (_(            | |
 * ( (                       _)             ) )
 *  | |_   _ _)_ _   _   _ ) _   _ _ ) _  _| |
 *   \__) (  (_ (_( ) ) (_( (_( ) (_( (  (__/
 *        _)                          _)
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

module.exports = {
    'parserOptions': {
        'ecmaVersion': 8,
        'ecmaFeatures': {
            'arrowFunctions': true,
            'binaryLiterals': false,
            'blockBindings': true,
            'classes': true,
            'defaultParams': true,
            'destructuring': true,
            'forOf': true,
            'generators': true,
            'modules': false,
            'objectLiteralComputedProperties': true,
            'objectLiteralDuplicateProperties': false,
            'objectLiteralShorthandMethods': true,
            'objectLiteralShorthandProperties': true,
            'octalLiterals': false,
            'regexUFlag': false,
            'regexYFlag': false,
            'restParams': true,
            'spread': true,
            'superInFunctions': true,
            'templateStrings': true,
            'unicodePointEscapes': true,
            'globalReturn': false,
            'jsx': false
        },
        'sourceType': 'module'
    },

    'env': {
        'browser': true,
        'node': true
    },

    'rules': {

        /* Possible Errors */
        'comma-dangle': [ 'error', 'never' ],
        'no-cond-assign': [ 'error', 'except-parens' ],
        'no-console': 'off',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': [ 'error', 'functions' ],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-reserved-keys': 'off',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'error',
        'valid-typeof': 'error',

        /* Best Practices */
        'accessor-pairs': 'off',
        'block-scoped-var': 'error',
        'complexity': 'off',
        'consistent-return': 'error',
        'curly': [ 'error', 'all' ],
        'default-case': 'error',
        'dot-notation': [ 'error', {
            'allowKeywords': true,
            'allowPattern': ''
        } ],
        'dot-location': [ 'error', 'property' ],
        'eqeqeq': 'error',
        'guard-for-in': 'off',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'off',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-new': 'error',
        'no-octal-escape': 'error',
        'no-octal': 'error',
        'no-param-reassign': 'error',
        'no-process-env': 'off',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'off',
        'no-void': 'off',
        'no-warning-comments': [ 'error', {
            'terms': [ 'todo', 'tofix' ],
            'location': 'start'
        } ],
        'no-with': 'error',
        'radix': 'error',
        'vars-on-top': 'error',
        'wrap-iife': [ 'error', 'inside' ],
        'yoda': [ 'error', 'never' ],

        /* Strict Mode */
        'strict': [ 'error', 'never' ],

        /* Variables */
        'no-catch-shadow': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'error',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-undefined': 'error',
        'no-unused-vars': [ 'error', {
            'vars': 'local',
            'args': 'after-used'
        } ],
        'no-use-before-define': 'error',

        /* Node.js */
        'handle-callback-err': 'error',
        'no-mixed-requires': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': [ 'error', '' ], // add any unwanted Node.js core modules
        'no-sync': 'error',

        /* Stylistic Issues */
        'array-bracket-spacing': [ 'error', 'always' ],
        'brace-style': [ 'error', '1tbs', {
            'allowSingleLine': true
        } ],
        'camelcase': [ 'error', {
            'properties': 'always'
        } ],
        'comma-spacing': [ 'error', {
            'before': false,
            'after': true
        } ],
        'comma-style': [ 'error', 'last' ],
        'computed-property-spacing': [ 'error', 'never' ],
        'consistent-this': 'off',
        'eol-last': 'error',
        'func-names': 'error',
        'func-style': 'off',
        'indent': [ 'error', 4 ],
        'key-spacing': [ 'error', {
            'beforeColon': false,
            'afterColon': true
        } ],
        'linebreak-style': 'off',
        'max-nested-callbacks': [ 'off', 3 ],

        'new-parens': 'error',
        'newline-after-var': 'off',
        'no-array-constructor': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': [ 'error', {
            'max': 2
        } ],
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-spaced-func': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'one-var': [ 'error', 'never' ],
        'operator-assignment': [ 'error', 'never' ],
        'padded-blocks': [ 'off', 'never' ],
        'quote-props': [ 'off', 'as-needed' ],
        'quotes': [ 'error', 'single' ],
        'semi-spacing': [ 'error', {
            'before': false,
            'after': true
        } ],
        'semi': [ 'error', 'always' ],
        'sort-vars': 'off',
        'space-after-keywords': 'off',
        'space-before-blocks': [ 'error', 'always' ],
        'space-before-function-paren': [ 'error', 'never' ],
        'space-in-parens': [ 'error', 'always' ],
        'space-infix-ops': 'error',
        'keyword-spacing': 'error',
        'space-unary-ops': 'off',
        'spaced-comment': [ 'error', 'always' ],
        'wrap-regex': 'error',

        /* ECMAScript 6 */
        'constructor-super': 'error',
        'generator-star-spacing': [ 'error', 'after' ],
        'no-this-before-super': 'error',
        'no-var': 'error',
        'object-shorthand': [ 'error', 'always' ],
        'prefer-const': 'error',

        /* Legacy */
        'max-depth': [ 'off', 3 ],
        'max-len': [ 'error', 121, 2 ],
        'max-params': 'off',
        'max-statements': 'off',
        'no-bitwise': 'error',
        'no-plusplus': 'off',

        'new-cap': 'error',
        'object-curly-spacing': [ 'error', 'always' ]
    },
    'globals': {
        'Promise': false
    }
};
