# eslint-config-getresponse-base

[![npm version](https://badge.fury.io/js/eslint-config-getresponse-base.svg)](https://badge.fury.io/js/eslint-config-getresponse-base)
[![Build Status](https://travis-ci.com/GetResponse/eslint-config-getresponse-base.svg?branch=master)](https://travis-ci.com/getresponse/eslint-config-getresponse-base)
[![Dependencies](https://img.shields.io/david/getresponse/eslint-config-getresponse-base.svg?style=flat-square)](https://david-dm.org/getresponse/eslint-config-getresponse-base)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

---

This package contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`. If you use React, see [eslint-config-getresponse](https://github.com/getresponse/eslint-config-getresponse/).

1. Install correct versions of each dependant package:

   ```bash
   npx install-peerdeps --dev eslint-config-getresponse-base
   ```

2. Add `"extends": "eslint-config-getresponse-base"` to your ESLint config.

3. If you're using babel be sure to use [babel-eslint](https://github.com/babel/babel-eslint) as your parser.
