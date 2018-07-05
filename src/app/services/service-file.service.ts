import { Injectable } from '@angular/core';
import{HttpModule, Http} from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {
url = 'https://appstoreapi.cfapps.io/apps/';
  constructor(public http : Http) { }

  getData(type){
    return this.http.get(this.url+type)
  }
}
