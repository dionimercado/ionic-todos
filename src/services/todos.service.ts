import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class TodosService {
    constructor( public afDB: AngularFireDatabase) {
        
    }
    todos = [];

    public getTodos() {
        // return this.todos;
        return this.afDB.list('todos/')
    }

    public getTodo(id) {
        // return this.todos.filter(function(e, i) { return e.id == id })[0] || { id: null, name: null, description: null, status: 'pending' };
        return this.afDB.object('todos/'+id)

    }

    public createTodo(todo) {
        this.afDB.database.ref('todos/'+todo.id).set(todo);
        // this.todos.push(todo);
    }

    public editTodo(todo) {
        // for( let i=0; i < this.todos.length; i++) {
        //     if(this.todos[i].id == todo.id) {
        //         this.todos[i] = todo;
        //     }
        // }
        this.afDB.database.ref('todos/'+todo.id).set(todo);
    }

    public deleteTodo(todo) {
        // for( let i=0; i < this.todos.length; i++) {
        //     if(this.todos[i].id == todo.id) {
        //         this.todos.splice(i, 1);
        //     }
        // }
        this.afDB.database.ref('todos/'+todo.id).remove();
    }
}