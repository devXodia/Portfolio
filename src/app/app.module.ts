import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LinksSectionComponent } from './links-section/links-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { BetweenPsComponent } from './between-ps/between-ps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainScreenComponent,
    LinksSectionComponent,
    AboutMeComponent,
    SkillsComponent,
    BetweenPsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
