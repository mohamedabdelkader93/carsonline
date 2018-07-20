import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { rootApi } from "./api-config";


@Injectable()
export class MainService {


  constructor(
    private httpClient: HttpClient
  ) {
    
  }

  getAllItems(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.httpClient.get(rootApi, { headers: headers });
  }

}
