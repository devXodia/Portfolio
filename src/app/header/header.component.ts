import { Component, ViewChild } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

showModal = false;

toggleModal(){
  this.showModal = !this.showModal;
}

ngOnInit(){
  AOS.init();
}


}
