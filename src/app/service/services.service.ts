import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private  url="http://localhost:8484/transaction";

  constructor(private http :HttpClient) {

  }
  public getAll(){
    return this.http.get(this.url+"/getAll");
  }

  public create(a) {
    return this.http.post(this.url +"/colis",a);
  }
  public update(a) {
    return this.http.post(this.url + "/update", a);
  }
  public delete(a) {
    return this.http.post(this.url + "/delete", a);
  }
}
