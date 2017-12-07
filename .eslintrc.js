module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
      "prefer-destructuring": ["error", {"object": false, "array": false}],
      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to" ],
      }]
    }
};
