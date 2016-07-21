import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as chroma from 'chroma';
import { ColorSchemeComponent } from '../color-scheme/color-scheme.component';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { ColorPaletteService } from '../color-palette.service';

@Component({
  moduleId: module.id,
  selector: 'app-color-form',
  templateUrl: 'color-form.component.html',
  styleUrls: ['color-form.component.css'], 
  directives: [ColorSchemeComponent, ColorPaletteComponent], 
  providers: [ColorPaletteService]
})

export class ColorFormComponent implements OnInit, OnChanges {
  constructor(private colorPaletteService: ColorPaletteService) {
  }
  
  numColorChoices: number[] = [3,4,5,6,7,8,9,10,11,12];
 
  numColors: number = 9;
  color1: string = '#ffde7f';
  color2: string = '#8a64c1';
  color3: string = '#043a39';

  scheme = [];

  onColorFormChange(event) {
    this.generateScheme();
  }

  generateScheme() { 
    if (this.isValidHex(this.color1) && 
        this.isValidHex(this.color2) &&
        this.isValidHex(this.color3))
    {
        this.scheme = this.colorPaletteService.generateScheme(this.numColors, this.color1, this.color2, this.color3);  
    }
    
  }

  isValidHex(hex) {
    var regexp= new RegExp('^#(?:[0-9a-f]{3}){1,2}$');
    return regexp.test(hex);
  }

  ngOnInit() {
    this.generateScheme();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('things changed!')
  }
}
