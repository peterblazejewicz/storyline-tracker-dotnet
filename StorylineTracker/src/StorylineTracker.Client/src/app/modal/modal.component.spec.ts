/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ModalComponent } from './modal.component';

beforeEachProviders(() => [ElementRef]);

describe('Component: Modal', () => {

  it('should create an instance',
  inject([ElementRef], (dialog: ElementRef) => {
    let component = new ModalComponent(dialog);
    expect(component).toBeTruthy();
  }));
});
