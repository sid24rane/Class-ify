import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo';
declare var $:any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[ToDoService]
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private router:Router,private todoService:ToDoService) {  }

  
  ngOnInit() {
      this.todoService.getTodo()
      .subscribe(todos => {
          this.todos = todos;
      });
  }

  check_todo(e:Event){
    e.preventDefault();
    let todoid = e.srcElement.id;
    $('#'+todoid).addClass(" todo-completed");
    let body = e.srcElement.innerHTML;
    let data = {todo_id:todoid,body:body,isDone:true};
    this.todoService.updateTodo(data)
    .subscribe(result=>{
      if(result === true){
          // added
      }else{
        // rejected
      }
    });

  }

  newtodo(data:any,e:Event){
    e.preventDefault();
    var s  = $('.todo-list');
    var a = $("<li _ngcontent-qtr-15 ><h3 class='m-l-xs'>"+data.body+"</h3></li>");
    s.append(a);
    this.todoService.addTodo(data)
    .subscribe(result=>{
      if(result === true){
          this.router.navigate(['/student-dash/toDo']);
      }else{
        // rejected
      }
    });
  }


}
