import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  createTeams(teamsSize: any, players: any){
    let arrPlayers = [...players];
    let teams = [];

    while(arrPlayers?.length > 0){
      teams.push(arrPlayers.splice(0, teamsSize));
    }

    return teams;
  }


  getClashs(teams: any){
    let clashs = [];
    let arrTemp = [];

    for(let i = 0; i < teams?.length - 1; i++){
      for(let j = i+1; j < teams?.length; j++){
        arrTemp.push(teams[i]);
        arrTemp.push(teams[j]);

        clashs.push(arrTemp);
        arrTemp = [];
      }
    }

    return clashs;
  }
}
