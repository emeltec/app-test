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
    const dragItems: any = document.querySelector('#dragItems');
    Sortable.create(dragItems, {
      group: {
        name: 'shared',
        pull: 'clone',
      },
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      onEnd: function (e: any) {
        // console.log(e);
      },
      onMove: function (e: any) {
        // var item = e.target;
        // // var srcData =  item.outerHTML;
        // const parser = new DOMParser();
        // // var htmlDom = parser.parseFromString(srcData, 'text/html');
        // let value = `<div _ngcontent-lcj-c1="" class="col-lg-6 drop-zone"></div>`
        // item.innerHTML = value;
        // console.log(e);
      }
    });


    const list2: any = [].slice.call(document.querySelectorAll('.nested-sortable'));

    for (var i = 0; i < list2.length; i++) {
      new Sortable(list2[i], {
        group: {
          name: 'shared',
          put: ["groupListOprtaions", "shared"],
        },
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        onAdd: function (e: any) {
          var item = e.target;
          // var srcData =  item.outerHTML;
          const parser = new DOMParser();
          // var htmlDom = parser.parseFromString(srcData, 'text/html');
          let value = `
          <div class="row removable nested-sortable">
            <div class="col-lg-6 drop-zone"></div>
          </div>`
          // item.innerHTML = value;
          console.log(e);
        },
        onEnd: function (e: any) {
          console.log(e);
        }
        /*
        onAdd: function (evt:any) {
          // var a = this;
          var item = evt.item;
          var srcData =  item.outerHTML;
          // const parser = new DOMParser();
          // var htmlDom = parser.parseFromString(srcData, 'text/html');
          let value = `<div _ngcontent-lcj-c1="" class="col-lg-6 drop-zone"></div>`
          item.innerHTML = value;
          console.log(item);
          // var button = srcData(htmlDom).find('button');
          // if(button.length != 0){
          //   console.log(evt.item);
          //   var buttonText = evt(htmlDom).find('button').data('optype');;
          //   evt(htmlDom).find('button').replaceWith(buttonText);
          //   let html='<div class="list-group-item">'+buttonText+'<div class="list-group nested-sortable"></div></div>';
          //   evt(evt.item).replaceWith(html);
          //   console.log(evt.item);
          //   evt.item.outerHTML = htmlDom[0].outerHTML;
          // } else {
          //  var text = htmlDom[0].innerText;
          //   var inp = text + "  <input tye=\"text\"  value = \">=\"\/><input //tye=\"text\"  value = \"25\"\/>"
          //   htmlDom[0].innerHTML = inp;
          //   evt.item.outerHTML = htmlDom[0].outerHTML;
          // }
        },*/
      }
      );
    }


  }



}
