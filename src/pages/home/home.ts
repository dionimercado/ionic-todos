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

  constructor(public navCtrl: NavController, public TodosService : TodosService ) {
    TodosService.getTodos()
      .valueChanges().subscribe(todos => {
        this.todos = todos
      });
  }

  public goToDetail(id) {
    this.navCtrl.push(DetailPage, {id:id});
  }

  public createTodo() {
    this.navCtrl.push(DetailPage, {id:0});
  }

}
