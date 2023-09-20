import { Component, ViewChild, AfterViewInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})



export class MainScreenComponent {

  ngOnInit(){
    AOS.init();
  } 

}
