import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodosService } from '../../services/todos.service';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  todo:any = { id: null, name: null, description: null, status: 'pending' }
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public TodosService : TodosService) {
    // this.id = navParams.get('id');
    // if( this.id != 0 ) {
    //   this.todo = TodosService.getTodo(this.id);
    // }
    this.id = navParams.get('id');
    if(this.id != 0){
      TodosService.getTodo(this.id)
        .valueChanges().subscribe(todo =>{
          console.log(todo)          
          this.todo = todo});
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  public saveTodo() {
    if( this.id != 0) {
      this.TodosService.editTodo(this.todo);
      alert('Changes successfully saved!')
    }else{
      this.todo.id = Date.now();
      this.TodosService.createTodo(this.todo);
      alert('Todo successfully added!');
    }

    this.navCtrl.pop();
  }

  public deleteTodo() {
    this.TodosService.deleteTodo(this.todo);
    alert('This todo has been deleted');
    this.navCtrl.pop();
  }

}
