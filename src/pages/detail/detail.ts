import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodosService } from '../../services/todos.service';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  todo = { id: null, name: null, description: null, status: 'pending' }
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public TodosService : TodosService) {
    this.id = navParams.get('id');
    if( this.id != 0 ) {
      this.todo = TodosService.getTodo(this.id);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  public addTodo() {
    this.todo.id = Date.now();
    this.TodosService.createTodo(this.todo);
    alert('Todo successfully added!')
    this.navCtrl.pop();
  }

}
