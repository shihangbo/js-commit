#!/usr/bin/env node
"use strict";
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;
bootstrap({
  cliPath: path.join(__dirname, '../../node_modules/commitizen'),
  // this is new
  config: {
    "path": "cz-conventional-changelog",
    "path": "cz-emoji"
  }
});