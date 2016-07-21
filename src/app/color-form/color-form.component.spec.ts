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

import { ColorFormComponent } from './color-form.component';

describe('Component: ColorForm', () => {
  it('should create an instance', () => {
    let component = new ColorFormComponent(new ColorPaletteService);
    expect(component).toBeTruthy();
  });
});
