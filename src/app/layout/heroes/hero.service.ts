import { Injectable } from '@angular/core';
import {Hero} from '../../entity/hero';
import {HEROES} from '../../entity/mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from '../../service/message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fatched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }
}
