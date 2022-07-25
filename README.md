# Deprecated
The project has merged with [eslint-config-getresponse](https://github.com/GetResponse/eslint-config-getresponse)

# eslint-config-getresponse-base

[![npm version](https://badge.fury.io/js/eslint-config-getresponse-base.svg)](https://badge.fury.io/js/eslint-config-getresponse-base)
[![Build Status](https://github.com/GetResponse/eslint-config-getresponse-base/actions/workflows/main.yml/badge.svg)](https://github.com/GetResponse/eslint-config-getresponse-base/actions)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

---

This package contains all of our ESLint rules, including ES6, TypeScript and Jest. It requires `eslint`, `typescript`, `@typescript-eslint/eslint-plugin` and `eslint-plugin-jest`. If you use React, see [eslint-config-getresponse](https://github.com/getresponse/eslint-config-getresponse/).

1. Install correct versions of each dependant package:

   ```bash
   npx install-peerdeps --dev eslint-config-getresponse-base
   ```

2. Add `"extends": "eslint-config-getresponse-base"` to your ESLint config.
