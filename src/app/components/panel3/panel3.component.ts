import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-panel3',
  templateUrl: './panel3.component.html',
  styleUrls: ['./panel3.component.css']
})
export class Panel3Component implements OnInit {
  tools = [
    { id: 1, cols: 1, css: 'col-12' },
    { id: 2, cols: 2, css: 'col-6' },
    { id: 3, cols: 3, css: 'col-4' },
    { id: 4, cols: 4, css: 'col-3' },
  ]

  draggable = {
    effectAllowed: 'all',
    disable: false,
    handle: false
  };

  listItems = [
    { id: 1, name: 'item1', children: [] },
    { id: 2, name: 'item2', children: [] }
  ];
  dropedItems = [];

  constructor() { }

  ngOnInit() {
  }

  onDrop(event: DndDropEvent) {
    if (event && event.data) {
      // this.dropedItems.push(event.data);
    }
    console.log('dropped', JSON.stringify(event, null, 2));
  }

}
