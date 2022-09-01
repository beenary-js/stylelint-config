module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-clean-order"],

  rules: {
    "selector-class-pattern": "^[a-z0-9-_]+$",
    "selector-max-combinators": 3,
    "selector-max-compound-selectors": 3,
    "selector-max-pseudo-class": 3,
    "selector-max-universal": 3,
    "selector-max-id": 0,
    "selector-max-type": 1,
    "selector-max-specificity": "0,3,1",
    "selector-no-qualifying-type": true,
    "color-named": "never",
    "declaration-no-important": true,
    "declaration-empty-line-before": null,
    "font-weight-notation": "numeric",
  },
}
