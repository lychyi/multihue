import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorPaletteService } from '../color-palette.service';

@Component({
  moduleId: module.id,
  selector: 'app-color-palette',
  templateUrl: 'color-palette.component.html',
  styleUrls: ['color-palette.component.css'], 
  providers: [ColorPaletteService]
})
export class ColorPaletteComponent implements OnInit {

  constructor(private colorPaletteService: ColorPaletteService) {}

  palette: any[] = this.colorPaletteService.getAll();
  paletteNames: string[] = this.colorPaletteService.getNames();
  @Input() selectedColor: any;
  @Output() selectedColorChange = new EventEmitter();

  setAsSelected = (chroma: any)=> {
    this.selectedColor = chroma.hex();
    this.selectedColorChange.emit(this.selectedColor);
  }

  ngOnInit() {
  }
}
