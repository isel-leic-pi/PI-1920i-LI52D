module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true

    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        }

    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            "backtick"

            
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": "off"

    }
};