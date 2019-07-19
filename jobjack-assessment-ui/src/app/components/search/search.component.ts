import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { DirEntry } from "../../interfaces/dir-entry";

import { SearchService } from '../../services/search.service';
import { Dir } from '@angular/cdk/bidi';


@Component({
  selector: 'app-dir-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
	results: Array<DirEntry> = [];
	resultLength: number = 0;
	dataSource: MatTableDataSource<DirEntry>;
	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
	
	
	busy: boolean = false;
	columnsToDisplay = ["name", "path", "size"];

	
	

	constructor(private searchService: SearchService) { 
		
	}

	setDataSourceAttributes() {
		this.dataSource.paginator = this.paginator;		
	  }

	newResults(e: any) {		
		this.resultLength = e.resultLength;
		this.dataSource = new MatTableDataSource(e);		
		this.dataSource.paginator = this.paginator;
	}

	
	
}