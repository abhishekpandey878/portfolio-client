import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioProfile } from '../../portfolio.types';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  @Input({ required: true }) profile!: PortfolioProfile;
  @Input() showEditTools = false;
  @Output() editRequested = new EventEmitter<void>();

  getSkillIcon(skill: string) {
    const normalized = skill.toLowerCase();
    const iconMap = [
      ['angular', 'angularjs/angularjs-original.svg'],
      ['typescript', 'typescript/typescript-original.svg'],
      ['javascript', 'javascript/javascript-original.svg'],
      ['node', 'nodejs/nodejs-original.svg'],
      ['express', 'express/express-original.svg'],
      ['mongodb', 'mongodb/mongodb-original.svg'],
      ['mongo', 'mongodb/mongodb-original.svg'],
      ['html', 'html5/html5-original.svg'],
      ['css', 'css3/css3-original.svg'],
      ['java', 'java/java-original.svg'],
      ['spring', 'spring/spring-original.svg'],
      ['mysql', 'mysql/mysql-original.svg'],
      ['postgres', 'postgresql/postgresql-original.svg'],
      ['sql server', 'microsoftsqlserver/microsoftsqlserver-plain.svg'],
      ['react', 'react/react-original.svg'],
      ['next', 'nextjs/nextjs-original.svg'],
      ['vue', 'vuejs/vuejs-original.svg'],
      ['bootstrap', 'bootstrap/bootstrap-original.svg'],
      ['tailwind', 'tailwindcss/tailwindcss-original.svg'],
      ['docker', 'docker/docker-original.svg'],
      ['git', 'git/git-original.svg'],
      ['github', 'github/github-original.svg'],
      ['firebase', 'firebase/firebase-plain.svg'],
      ['python', 'python/python-original.svg'],
      ['c++', 'cplusplus/cplusplus-original.svg'],
      ['c#', 'csharp/csharp-original.svg'],
      ['php', 'php/php-original.svg'],
      ['laravel', 'laravel/laravel-original.svg'],
      ['rest', 'fastapi/fastapi-original.svg'],
      ['api', 'fastapi/fastapi-original.svg']
    ] as const;

    const match = iconMap.find(([keyword]) => normalized.includes(keyword));
    const iconPath = match?.[1] || 'devicon/devicon-original.svg';
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`;
  }
}
