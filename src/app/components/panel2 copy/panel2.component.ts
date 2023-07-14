import { Component, OnInit } from '@angular/core';
// import * as Sortable from 'sortablejs';
var Sortable = require('../../../assets/js/sortable.js')

@Component({
  selector: 'app-panel2',
  templateUrl: './panel2.component.html',
  styleUrls: ['./panel2.component.css']
})

export class Panel2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const nestedSortables:any = [].slice.call(document.querySelectorAll('.nested-sortable'));
    // console.log(nestedSortables);
    
    for (var i = 0; i < nestedSortables.length; i++) {
      new Sortable(nestedSortables[i], {
        group:{
          name: 'groupFilter',
          put:["groupListAuswahlFall", "groupListOprtaions", "groupFilter"],
          // pull: 'clone',
        },
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
      });
    }
  }

  

  onDrag(event: any) {
    event.preventDefault();
    // console.log(ev);
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    // console.log(event);
  }

  onDragEnter(event: any) {
    event.preventDefault();
    event.stopPropagation();
    // console.log(event);
  }

  onDrop(event: any) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
  }

}
