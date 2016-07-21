/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ColorPaletteService } from '../color-palette.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ColorPaletteComponent } from './color-palette.component';

describe('Component: ColorPalette', () => {
  it('should create an instance', () => {
    let component = new ColorPaletteComponent(new ColorPaletteService);
    expect(component).toBeTruthy();
  });
});
