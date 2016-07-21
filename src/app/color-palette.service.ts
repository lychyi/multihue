import { Injectable } from '@angular/core';
import * as chroma from 'chroma';

@Injectable()
export class ColorPaletteService {
  allColors: any = {};
  allColorNames: any[] = [];

  constructor() {
    var turquoise = ["#80F3F1","#14D4D1","#11B8B5","#0EA4A2","#0A8482","#076362","#064E4D","#043A39","#032C2B"];
    var cornflower = ["#DAE0FB","#B1BEF7","#8FA2F4","#798FED","#4D6CEE","#0F50C5","#1232BD","#0D258E","#091D6B"];
    var portage = ["#E6DEF2","#CAB9E3","#B39BD7","#A487CE","#8A64C1","#6B43A5","#553583","#3E285F","#301D49"];
    var violet = ["#F4DAEC","#E7AFD6","#DD8CC4","#D572B6","#C6429D","#972E76","#7A225F","#5B1947","#461236"];
    var slate = ["#DEE1E6","#BAC1CB","#9DA7B5","#8995A5","#69788E","#4F5A67","#3E4752","#2E343C","#23272D"];
    var red = ["#F9DADB","#F2AFB1","#EB8B8E","#E76F73","#DE3439","#AE1B1F","#8B1518","#681013","#500C0E"];
    var green = ["#B8EEBE","#57D965","#2BBE3B","#27AA36","#20882C","#186621","#13511A","#0E3C13","#0A2D0E"];
    var mustard = ["#FFDE7F","#F5B500","#D39C00"];
    var greys = ["#F9F9F9","#E5E5E5","#BBBBBB","#666666","#454545"];
    var ilmn = ["#FFB441","#328ED1"];

    this.allColorNames = ['turquoise', 'cornflower', 'portage', 'violet', 'slate', 'red', 'green', 'mustard', 'greys', 'ilmn'];

    this.allColorNames.forEach((name) => {
      this.allColors[name] = this.hexToChromas(eval(name));
    });
  }

  getAll() {
    return this.allColors;
  }

  getNames() {
    return this.allColorNames;
  }
  
  hexToChromas(colors: any[]) {
    var chromas = [];

    colors.forEach((color) => {
      chromas.push(chroma(color));
    })

    return chromas;
  }

  generateScheme = (numColors, c1: string, c2: string, c3: string) => {
    var scheme = [];
    
    chroma
      .bezier([c1, c2, c3])
      .scale()
      .colors(+numColors)
      .forEach((color) => {      
        scheme.push(chroma(color));
      });

    return scheme;
  }

  correctLightness = (scale: any) => {
    return scale.correctLightness(true);
  }
}
