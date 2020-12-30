import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as fromAppComponent from './contador/state/contador.action';


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
    const accion = new fromAppComponent.IncrementarAction();
    this.store.dispatch( accion );
  }

  decrementar(){
    // this.contador --;
    if (this.contador > 0){
      const accion = new fromAppComponent.DecrementarAction();
      this.store.dispatch( accion );
    }

  }
}
