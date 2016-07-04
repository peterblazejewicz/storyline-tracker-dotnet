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
import { ModalService } from './modal.service';

beforeEachProviders(() => [ElementRef, ModalService]);

describe('Component: Modal', () => {

  it('should create an instance',
  inject([ElementRef, ModalService], (dialog: ElementRef, service: ModalService) => {
    let component = new ModalComponent(dialog, service);
    expect(component).toBeTruthy();
  }));
});
