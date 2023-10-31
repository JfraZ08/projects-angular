import { Component } from '@angular/core';
import { TransfertDataService } from '../service/transfert/transfert-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (
    private transfertService: TransfertDataService,
  ) 
  {}

  setData(valeur:string,valeur2:string,valeur3:string): void{
    this.transfertService.setData(valeur,valeur2,valeur3);
    
  }

}
