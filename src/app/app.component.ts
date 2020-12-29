import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/state/contador.action';

interface AppState {
  contador: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contador: number;

  constructor( private store: Store<AppState>){
    this.contador = 0;
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    })

  }

  title = 'practicas-redux';

  incrementar(){
    // this.contador ++;
    const accion = new IncrementarAction();
    this.store.dispatch( accion );
  }

  decrementar(){
    // this.contador --;
    if (this.contador > 0){
      const accion = new DecrementarAction();
      this.store.dispatch( accion );
    }

  }
}
