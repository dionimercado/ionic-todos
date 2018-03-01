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

    public createTodo(note) {
        this.todos.push(note)
    }
}