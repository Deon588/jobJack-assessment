import {  Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

import { FormControl } from '@angular/forms';




import { Observable } from "rxjs";
import { map, filter, debounceTime, tap, switchMap, distinctUntilChanged } from "rxjs/operators";
//import { fromEvent } from "rxjs/add/observable";







import { SearchService } from '../../services/search.service';
import { DirEntry } from '../../interfaces/dir-entry';

@Component({
  selector: 'app-search-box',
  template: `
  <mat-form-field>
    <input matInput type="text" placeholder="Search" [formControl]="term">
    </mat-form-field>
  `
})
export class SearchBoxComponent implements OnInit {
  term = new FormControl();	
  @Output() busy: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<DirEntry[]> = new EventEmitter<DirEntry[]>();
  
  rests: DirEntry;
  

  constructor(private searchService: SearchService) {
	  
  }

  ngOnInit(): void {
		this.term.valueChanges.pipe(debounceTime(400))
    .pipe(distinctUntilChanged(),
    filter(term => term !== ''),
		tap(() => this.busy.emit(true)),
		switchMap(term => this.searchService.search(term)))
		.subscribe(
		(res: Array<DirEntry>) => {      
console.log(res);      
      this.results.emit(res);
			this.busy.emit(false);				
		},
		(err) => { 
          console.log(err);
          this.busy.emit(false);
        },
		() => { 		
			console.log(`Completed`);
			

        });
  }
}