import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './layout/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './layout/hero-detail/hero-detail.component';
import {HeroService} from './layout/heroes/hero.service';
import { MessagesComponent } from './layout/messages/messages.component';
import {MessageService} from './service/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    HeroService,
    MessageService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
