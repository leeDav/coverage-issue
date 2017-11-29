'use strict';

const FOO = require('../src/index');
const chai = require('chai');
const expect = require('chai').expect;

it('should do something', () => {
  expect(FOO(2)).to.equal(4);
});
