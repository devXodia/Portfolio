import { Component } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  ngOnInit(){
    AOS.init();
  }

}
