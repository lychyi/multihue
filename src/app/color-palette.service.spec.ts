/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ColorPaletteService } from './color-palette.service';

describe('ColorPalette Service', () => {
  beforeEachProviders(() => [ColorPaletteService]);

  it('should ...',
      inject([ColorPaletteService], (service: ColorPaletteService) => {
    expect(service).toBeTruthy();
  }));
});
