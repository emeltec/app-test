import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDragStart, CdkDropList, CdkDropListGroup, CdkDragMove, CdkDragEnter, moveItemInArray, CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";
import { ViewportRuler } from "@angular/cdk/overlay";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  title = 'angular-material-drag-and-drop-lists';
  todo = [
    'Task - 1',
    'Task - 4'
  ];

  done = [
    'Task - 2',
    'Task - 5'
  ];

  review = [
    'Task - 3',
    'Task - 6'
  ];

  ngOnInit() {
    localStorage.setItem("todo", JSON.stringify(this.todo))
    localStorage.setItem("done", JSON.stringify(this.done))
    localStorage.setItem("review", JSON.stringify(this.review))
  }



  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data)
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(event.currentIndex)
    }
  }

}
