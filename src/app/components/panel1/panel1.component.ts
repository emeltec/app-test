import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.scss']
})
export class Panel1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  onDrag(event:any){
    event.preventDefault();
    // console.log(ev);
  }

  onDragOver(event:any){
    event.preventDefault();
    event.stopPropagation();
    // console.log(event);
  }

  onDragEnter(event:any){
    event.preventDefault();
    event.stopPropagation();
    // console.log(event);
  }

  onDrop(event:any){
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
  }

}
