import { Injectable } from '@angular/core';
//import { Http, Response, ResponseContentType, Headers, RequestOptions, } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = "/api";

  constructor(private hc: HttpClient) { }

  search(path: string): Observable<any> {
    console.log(`api url ${this.apiUrl}`);
return this.hc.get(`${this.apiUrl}?basePath=${path}`);
  }


  
}
