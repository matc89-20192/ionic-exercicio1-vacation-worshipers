import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  public editNome:string = "";
  public labelMensagem:string = "Alô, Mundo!";
  constructor(public navCtrl: NavController) {

  }

  buttonClick(){
    this.labelMensagem="Alô, "+this.editNome+"!";
  }

}
