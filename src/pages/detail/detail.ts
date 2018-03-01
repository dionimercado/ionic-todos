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
    this.todo = TodosService.getTodo(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
