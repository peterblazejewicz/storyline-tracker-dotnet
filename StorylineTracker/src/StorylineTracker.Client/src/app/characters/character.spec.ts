/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {Character} from './character';

describe('Character', () => {
  it('should create an instance', () => {
    expect(new Character()).toBeTruthy();
  });
});
