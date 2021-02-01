import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = new FormControl('');
  age = new FormControl('');
  code = new FormControl('');
 
}
