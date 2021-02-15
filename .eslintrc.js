module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    },
    'overrides': [
        {
            'files': [
                '**/*.test.js'
            ],
            'env': {
                'jest': true // now **/*.test.js files' env has both es6 *and* jest
            },
            'rules': {
                'indent': [
                    'error',
                    2
                ],
            }
        }]
}
