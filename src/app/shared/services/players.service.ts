import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  getShuffledPlayers(players: any){
    let arrPlayers = [...players]
    for (let i = arrPlayers?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arrPlayers[i], arrPlayers[j]] = [arrPlayers[j], arrPlayers[i]];
    }
    return arrPlayers;
  }
}
