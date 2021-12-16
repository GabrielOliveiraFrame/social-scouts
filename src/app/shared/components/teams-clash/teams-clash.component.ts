import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams-clash',
  templateUrl: './teams-clash.component.html',
  styleUrls: ['./teams-clash.component.css']
})
export class TeamsClashComponent implements OnInit {

  formularioLink!: FormGroup;

  formularioScout!: FormGroup;

  tournament$!: any;

  clashs!: any;

  generatedLink: boolean = false;

  url!: string;

  clashsIndex: number = 0;

  scouts = ['Gol', 'Falta', 'Roubada de Bola', 'Cartão Amarelo', 'Cartão Vermelho'];

  summary: any = [];

  // url para testes
  // https://www.youtube.com/watch?v=htWsxxJ0WW4

  constructor(
    private teamsService: TeamsService,
    private formBuilder: FormBuilder,
    private domSanitizer: DomSanitizer,
    private store: Store<{tournament: any}>
  ) { }

  ngOnInit(): void {

    this.tournament$ = this.store.pipe(
      select('tournament')
    );

    this.tournament$.subscribe((data: any) => {
      this.clashs = this.teamsService.getClashs(data.teams)
    })

    this.formularioLink = this.formBuilder.group({
      link: [null, Validators.required]
    });

    this.formularioScout = this.formBuilder.group({
      player: [null, Validators.required],
      scout: [null, Validators.required],
      description: [null, Validators.required],
      time: [null, Validators.required]
    });
  }

  onSubmitLink(){
    if(this.formularioLink.valid){
      this.url = this.formularioLink.get('link')?.value;
      this.generatedLink = true;
    }
  }

  getSafeUrl(){
    this.url = this.url.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  onSubmitScouts(){
    if(this.formularioScout.valid){
      this.summary.push(this.formularioScout.value);
      this.formularioScout.reset();
    }
  }

  nextClash(){
    this.summary = [];
    this.clashsIndex++;
  }

}
