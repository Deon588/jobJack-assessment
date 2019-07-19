import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { DirEntry } from "../../interfaces/dir-entry";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {  
  @Output() resultsEvent: EventEmitter<Array<DirEntry>> = new EventEmitter<Array<DirEntry>>();
  @Output() busyEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    
  }

  emitResults(e: Array<DirEntry>) {        
    this.resultsEvent.emit(e);    
  }

  emitBusy(e: boolean) {
    this.busyEvent.emit(e);
  }

}
