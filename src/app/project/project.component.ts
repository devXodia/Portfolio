import { Component } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  ngOnInit(){
    AOS.init();
  }
}
