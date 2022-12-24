import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnaService {

  private isMenuEnabled = new Subject<boolean>();
  constructor() { }

  // Création d'une méthode pour gérer l'état du menu latéral (activé ou désactivé)
setMenuState(enabled){
  this.isMenuEnabled.next(enabled);
}

// Méthode pour obtenir l'état du menu
getMenuState(): Subject<boolean>{
  return this.isMenuEnabled;
}
}
