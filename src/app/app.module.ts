import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './components/board/board.component';
import { Panel1Component } from './components/panel1/panel1.component';
import { Panel2Component } from './components/panel2/panel2.component';
import { DndModule } from 'ngx-drag-drop';
import { Panel3Component } from './components/panel3/panel3.component';
import { DropAreaComponent } from './components/panel3/drop-area/drop-area.component';
import { Board2Component } from './components/board2/board2.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    Board2Component,
    Panel1Component,
    Panel2Component,
    Panel3Component,

    DropAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
