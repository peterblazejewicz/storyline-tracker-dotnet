/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CharactersComponent } from './characters.component';

describe('Component: Characters', () => {
  it('should create an instance', () => {
    let component = new CharactersComponent();
    expect(component).toBeTruthy();
  });
});
