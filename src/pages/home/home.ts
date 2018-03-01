import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodosService } from '../../services/todos.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myNav') nav: NavController

  todos = [];
  constructor(public navCtrl: NavController, public todosService : TodosService ) {
    this.todos = todosService.getTodos();
  }

  public goToDetail(id) {
    this.navCtrl.push(DetailPage, {id:id});
  }

  
}
