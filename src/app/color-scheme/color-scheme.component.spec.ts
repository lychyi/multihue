/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ColorSchemeComponent } from './color-scheme.component';

describe('Component: ColorScheme', () => {
  it('should create an instance', () => {
    let component = new ColorSchemeComponent();
    expect(component).toBeTruthy();
  });
});
