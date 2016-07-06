/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CharacterService } from './character.service';

describe('Character Service', () => {
  beforeEachProviders(() => [CharacterService]);

  it('should ...',
      inject([CharacterService], (service: CharacterService) => {
    expect(service).toBeTruthy();
  }));
});
