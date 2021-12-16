import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setPlayers } from 'src/ngrx';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {

  formulario!: FormGroup;

  game$!: Observable<any>;

  players: any = [];

  numberOfPlayers!: any;

  indexPlayer: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<{tournament: any}>
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
    });

    this.game$ = this.store.pipe(
      select('tournament')
    );

    this.game$.subscribe(data => {
      this.numberOfPlayers = data.game.numberOfTeams * data.game.teamsSize;
    })
  }

  onSubmit(): void {
    if(this.formulario.valid) {
      if(this.indexPlayer < this.numberOfPlayers){

        this.players.push(this.formulario.value);
        this.formulario.reset();
        this.indexPlayer++;
      } else {

        this.players.push(this.formulario.value);
        this.store.dispatch(setPlayers({payload: this.players}))
        this.navigate();
      }
    }
  }

  navigate(): void{
    this.router.navigateByUrl('/shuffled-teams');
  }

}
