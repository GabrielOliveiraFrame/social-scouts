import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { setTeams } from 'src/ngrx';
import { PlayersService } from '../../services/players.service';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-shuffled-teams',
  templateUrl: './shuffled-teams.component.html',
  styleUrls: ['./shuffled-teams.component.css']
})
export class ShuffledTeamsComponent implements OnInit {
  tournament$!: any;
  teams: any;
  shuffledPlayers!: any;

  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private store: Store<{tournament: any}>,
    private playersService: PlayersService
  ) { }

  ngOnInit(): void {
    this.tournament$ = this.store.pipe(
      select('tournament')
    )

    this.tournament$.subscribe((data: any) => {
      this.shuffledPlayers = this.playersService.getShuffledPlayers(data.players)
      this.teams = this.teamsService.createTeams(data.game.teamsSize, this.shuffledPlayers);
    })

    this.store.dispatch(setTeams({payload: this.teams}));
  }

  navigate(){
    this.router.navigateByUrl('/teams-clash');
  }

}
