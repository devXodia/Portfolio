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
import { ProjectComponent } from './project/project.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { BetweenCfComponent } from './between-cf/between-cf.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainContentComponent } from './main-content/main-content.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainScreenComponent,
    LinksSectionComponent,
    AboutMeComponent,
    SkillsComponent,
    BetweenPsComponent,
    ProjectComponent,
    ContactSectionComponent,
    BetweenCfComponent,
    FooterComponent,
    ImpressumComponent,
    MainContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
