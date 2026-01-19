import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IdeaGeneratorDataService } from './services/idea-generator-data.service';
import { IdeaGeneratorHeroComponent } from './components/idea-generator-hero/idea-generator-hero.component';
import { IdeaGeneratorMachineComponent } from './components/idea-generator-machine/idea-generator-machine.component';

interface IdeaSelection {
  who: string;
  why: string;
  what: string;
}

@Component({
  selector: 'app-idea-generator',
  standalone: true,
  imports: [CommonModule, IdeaGeneratorHeroComponent, IdeaGeneratorMachineComponent],
  templateUrl: './idea-generator.component.html',
  styleUrl: './idea-generator.component.scss'
})
export class IdeaGeneratorComponent implements OnInit {
  whoList: string[] = [];
  whyList: string[] = [];
  whatList: string[] = [];

  selection: IdeaSelection = {
    who: 'your audience',
    why: 'a motivating reason',
    what: 'a meaningful offering'
  };
  synthesis = this.buildSynthesis(this.selection);

  constructor(private dataService: IdeaGeneratorDataService) {}

  ngOnInit(): void {
    forkJoin({
      who: this.dataService.getWhoList(),
      why: this.dataService.getWhyList(),
      what: this.dataService.getWhatList()
    }).subscribe({
      next: ({ who, why, what }) => {
        this.whoList = who ?? [];
        this.whyList = why ?? [];
        this.whatList = what ?? [];
        this.generateIdea();
      }
    });
  }

  generateIdea(): void {
    const selection: IdeaSelection = {
      who: this.pickRandom(this.whoList, this.selection.who),
      why: this.pickRandom(this.whyList, this.selection.why),
      what: this.pickRandom(this.whatList, this.selection.what)
    };
    this.selection = selection;
    this.synthesis = this.buildSynthesis(selection);
  }

  private pickRandom(list: string[], fallback: string): string {
    if (!list || list.length === 0) {
      return fallback;
    }
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  }

  private buildSynthesis(selection: IdeaSelection): string {
    return `I want to run ${selection.what}.\nMy target market is ${selection.who}.\nThe goal is ${selection.why}.`;
  }
}
