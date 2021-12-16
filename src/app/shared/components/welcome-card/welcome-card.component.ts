import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setGame } from 'src/ngrx';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<{tournament: any}>
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      numberOfTeams: [null, Validators.required],
      teamsSize: [null, Validators.required]
    })
  }

  onSubmit(): void {
    if(this.formulario.valid){
      this.store.dispatch(setGame({payload: this.formulario.value}))
      this.navigate();
    }
  }

  navigate(): void{
    this.router.navigateByUrl('/add-players');
  }

}
