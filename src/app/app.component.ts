import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { ColorFormComponent } from './color-form/color-form.component';

import * as moment from 'moment';
import * as chroma from 'chroma';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'], 
  directives: [AlertComponent, ColorFormComponent]
})

export class AppComponent implements OnInit {
  ngOnInit() {
    
  }
}