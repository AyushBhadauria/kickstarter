import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class DataService {

  constructor(private http:Http) { }
  getPosts(){
    return this.http.get('http://starlord.hackerearth.com/kickstarter')
    .map(response=>response.json())
  }
}
