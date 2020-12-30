import { Component, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../state/contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  contador:number;

  constructor(private store: Store<AppState>) {
    this.contador = 0;
   }

  ngOnInit(): void {
    this.store.select('contador')
    .subscribe( contador => this.contador = contador);
  }

  reset(){
    const accion = new ResetAction();
    this.store.dispatch( accion );
  }

}
