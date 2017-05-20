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
    'env': {
        'browser': true,
        'node': true
    },

    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module'
    },

    'rules': {

        /* Possible Errors */
        'comma-dangle': [ 2, 'never' ],
        'no-cond-assign': [ 2, 'except-parens' ],
        'no-console': 0,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 0,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [ 2, 'functions' ],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-reserved-keys': 0,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-jsdoc': 2,
        'valid-typeof': 2,

        /* Best Practices */
        'accessor-pairs': 0,
        'block-scoped-var': 2,
        'complexity': 0,
        'consistent-return': 2,
        'curly': [ 2, 'all' ],
        'default-case': 0,
        'dot-notation': [ 2, {
            'allowKeywords': true,
            'allowPattern': ''
        } ],
        'dot-location': [ 2, 'property' ],
        'eqeqeq': 2,
        'guard-for-in': 0,
        'no-alert': 2,
        'no-caller': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-eq-null': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 0,
        'no-floating-decimal': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-param-reassign': 0,
        'no-process-env': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 0,
        'no-void': 0,
        'no-warning-comments': [ 2, {
            'terms': [ 'todo', 'tofix' ],
            'location': 'start'
        } ],
        'no-with': 2,
        'radix': 2,
        'vars-on-top': 2,
        'wrap-iife': [ 2, 'inside' ],
        'yoda': [ 2, 'never' ],

        /* Strict Mode */
        'strict': [ 2, 'never' ],

        /* Variables */
        'no-catch-shadow': 0,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 2,
        'no-undef-init': 2,
        'no-undef': 2,
        'no-undefined': 2,
        'no-unused-vars': [ 2, {
            'vars': 'local',
            'args': 'after-used'
        } ],
        'no-use-before-define': 2,

        /* Node.js */
        'handle-callback-err': 2,
        'no-mixed-requires': 2,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 2,
        'no-restricted-modules': [ 2, '' ], // add any unwanted Node.js core modules
        'no-sync': 2,

        /* Stylistic Issues */
        'array-bracket-spacing': [ 2, 'always' ],
        'brace-style': [ 2, '1tbs', {
            'allowSingleLine': true
        } ],
        'camelcase': [ 2, {
            'properties': 'always'
        } ],
        'comma-spacing': [ 2, {
            'before': false,
            'after': true
        } ],
        'comma-style': [ 2, 'last' ],
        'computed-property-spacing': 0,
        'consistent-this': 0,
        'eol-last': 2,
        'func-names': 2,
        'func-style': 0,
        'indent': [ 2, 4 ],
        'key-spacing': [ 2, {
            'beforeColon': false,
            'afterColon': true
        } ],
        'linebreak-style': 0,
        'max-nested-callbacks': [ 0, 3 ],

        'new-parens': 2,
        'newline-after-var': 0,
        'no-array-constructor': 2,
        'no-continue': 2,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [ 2, {
            'max': 2
        } ],
        'no-nested-ternary': 0,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'one-var': [ 2, 'never' ],
        'operator-assignment': [ 2, 'never' ],
        'padded-blocks': [ 0, 'never' ],
        'quote-props': [ 0, 'as-needed' ],
        'quotes': [ 2, 'single' ],
        'semi-spacing': [ 2, {
            'before': false,
            'after': true
        } ],
        'semi': [ 2, 'always' ],
        'sort-vars': 0,
        'space-after-keywords': 0,
        'space-before-blocks': [ 2, 'always' ],
        'space-before-function-paren': [ 2, 'never' ],
        'space-in-parens': [ 2, 'always' ],
        'space-infix-ops': 2,
        'keyword-spacing': 2,
        'space-unary-ops': 0,
        'spaced-comment': [ 2, 'always' ],
        'wrap-regex': 2,

        /* ECMAScript 6 */
        'constructor-super': 2,
        'generator-star-spacing': [ 2, 'after' ],
        'no-this-before-super': 2,
        'no-var': 2,
        'object-shorthand': [ 2, 'always' ],
        'prefer-const': 2,

        /* Legacy */
        'max-depth': [ 0, 3 ],
        'max-len': [ 2, 121, 2 ],
        'max-params': 0,
        'max-statements': 0,
        'no-bitwise': 2,
        'no-plusplus': 0,

        'new-cap': 2,
        'object-curly-spacing': [ 2, 'always' ]
    },
    'globals': {
        'Promise': false
    }
};
