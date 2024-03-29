import { Component, OnInit } from '@angular/core';
import {Hero} from '../../entity/hero';
import {HeroService} from './hero.service';
import {HEROES} from '../../entity/mock-heroes';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  //selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }

}
