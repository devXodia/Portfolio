import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'impressum', component: ImpressumComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

