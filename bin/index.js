#!/usr/bin/env node
"use strict";
const path = require('path');
const fs = require('fs');
const mainPath = path.join(process.cwd(), 'src/index.js');
const mainMsg = fs.readFileSync(mainPath,"utf-8");
// console.log(mainMsg, 111);
const isSensorsInit = mainMsg.indexOf('sensors.init') > -1
if (isSensorsInit) {
  process.exit(0);
} else {
  throw new Error("请初始化 imou-sensors 埋点信息！");
}