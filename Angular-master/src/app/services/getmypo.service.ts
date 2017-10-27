import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetmypoService {

  constructor(private http: Http) { }
  getdatapo() {
    return this.http.get("http://pokeapi.co/api/v2/pokemon/1/")
      .map((res) => res.json());
  }

}
