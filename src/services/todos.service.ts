import { Injectable } from '@angular/core';

@Injectable()

export class TodosService {
    todos = [
        {id: 1, name: 'Learn Ionic basics', description: 'Bla bla bla 1', status: 'pending'},
        {id: 2, name: 'Do my final project', description: 'Bla bla bla 2', status: 'pending'},
        {id: 3, name: 'Take my exam', description: 'Bla bla bla 3', status: 'pending'},
        {id: 4, name: 'Have a code review with Jarec', description: 'Bla bla bla 4', status: 'pending'}
    ];

    public getTodos() {
        return this.todos;
    }

    public getTodo(id) {
        return this.todos.filter(function(e, i) { return e.id == id })[0] || { id: null, name: null, description: null, status: 'pending' };
    }

    public createTodo(todo) {
        this.todos.push(todo)
    }

    public editTodo(todo) {
        for( let i=0; i < this.todos.length; i++) {
            if(this.todos[i].id == todo.id) {
                this.todos[i] = todo;
            }
        }
    }

    public deleteTodo(todo) {
        for( let i=0; i < this.todos.length; i++) {
            if(this.todos[i].id == todo.id) {
                this.todos.splice(i, 1);
            }
        }
    }
}