import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlayersComponent } from './add-players/add-players.component';
import { ShuffledTeamsComponent } from './shuffled-teams/shuffled-teams.component';
import { TeamsClashComponent } from './teams-clash/teams-clash.component';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { MatchSummaryComponent } from './match-summary/match-summary.component';


@NgModule({
  declarations: [
    NavBarComponent,
    WelcomeCardComponent,
    AddPlayersComponent,
    ShuffledTeamsComponent,
    TeamsClashComponent,
    MatchSummaryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    WelcomeCardComponent
  ]
})
export class ComponentsModule { }
