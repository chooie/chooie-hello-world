"use strict";

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("Says 'Hello, World!'", function () {
  expect((0, _index2.default)()).toBe("Hello, World!!!");
});