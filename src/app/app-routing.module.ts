import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayersComponent } from './shared/components/add-players/add-players.component';
import { ShuffledTeamsComponent } from './shared/components/shuffled-teams/shuffled-teams.component';
import { TeamsClashComponent } from './shared/components/teams-clash/teams-clash.component';
import { WelcomeCardComponent } from './shared/components/welcome-card/welcome-card.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch:'full'},
  {path:'welcome', component: WelcomeCardComponent},
  {path:'add-players', component: AddPlayersComponent},
  {path:'shuffled-teams', component: ShuffledTeamsComponent},
  {path:'teams-clash', component: TeamsClashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
