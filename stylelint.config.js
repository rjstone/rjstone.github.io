/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-recommended', 'stylelint-config-html'],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-no-deprecated': null,
    // Tailwind's @apply takes utility class names, not a standard CSS prelude
    'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['apply'] }]
  }
}
