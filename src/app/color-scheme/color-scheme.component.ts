import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-color-scheme',
  templateUrl: 'color-scheme.component.html',
  styleUrls: ['color-scheme.component.css']
})
export class ColorSchemeComponent implements OnInit {
  @Input() scheme = ['#0000ff'];
  darkText = '#444';
  lightText = '#f9f9f9'

  ngOnInit() {
  }

}
