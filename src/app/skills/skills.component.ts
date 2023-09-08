import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsList = [
    {
      name: 'Angular',
      url: '../../assets/img/skills_icons/Angular.svg'
    },
    {
      name: 'Typescript',
      url: '../../assets/img/skills_icons/ts.svg'
    },
    {
      name: 'JavaScript',
      url: '../../assets/img/skills_icons/Javascript.svg'
    },
    {
      name: 'HTML',
      url: '../../assets/img/skills_icons/html.svg'
    },
    {
      name: 'Firebase',
      url: '../../assets/img/skills_icons/Firebase.svg'
    },
    {
      name: 'GIT',
      url: '../../assets/img/skills_icons/git.svg'
    },
    {
      name: 'CSS',
      url: '../../assets/img/skills_icons/wp.svg'
    },
    {
      name: `Material design`,
      url: '../../assets/img/skills_icons/Material.svg'
    },
    {
      name: 'Rest-Api',
      url: '../../assets/img/skills_icons/Api.svg'
    },
    {
      name: 'Scrum',
      url: '../../assets/img/skills_icons/scrum.svg'
    }

]



}
