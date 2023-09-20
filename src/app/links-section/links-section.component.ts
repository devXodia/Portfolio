import * as AOS from 'aos'
import { Component } from '@angular/core';

@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.scss']
})
export class LinksSectionComponent {

  ngOnInit(){
    AOS.init();
  }

}
