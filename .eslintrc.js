module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "import/resolver": {
          "node": {
            "paths": ["src"]
          }
        }
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "no-nested-ternary": 0,
        "no-param-reassign": 0,
        "no-underscore-dangle": 0,
        "no-console": 0,
        "no-unused-expressions": 0,
        "no-alert": 0,
        "no-script-url": 0,
        "comma-dangle": 0,  // not sure why airbnb turned this on. gross!
        "indent": ["error", 4, {"ignoredNodes": ["JSXElement"]}],
        "id-length": 0,
        "global-require": 0,
        "max-len": 0,
        "prefer-template": 0,
        "arrow-parens": 0,
        "function-paren-newline": 0,
        "import/no-extraneous-dependencies": 0,
        "import/newline-after-import": 0,
        "import/extensions": 0,
        "import/prefer-default-export": 0,
        "import/no-unresolved": 2,
        "import/no-named-as-default": 0,
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/label-has-for": [ 2, {
            "required": {
                "every": [ "id" ]
            },
        }],
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        "react/jsx-indent": [2, 4 ],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prefer-stateless-function": 1,
        "react/destructuring-assignment": 0,
        "react/forbid-prop-types": 0,
        "react/no-typos": 0,
        "react/default-props-match-prop-types": 0,
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "react/no-danger": 0, // disable dangerouslySet html warning
    }
};
