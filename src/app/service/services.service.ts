import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private  url="http://localhost:6688/api/v1";

  constructor(private http :HttpClient) {

  }
  public getClientAll(){

    return this.http.get(this.url+"/getClientAll");
  }

  public getLogin(a){
    return this.http.post(this.url+ "/login" , a);
  }

  public getAllRole(){

    return this.http.get(this.url+"/getAllRole");
  }
  public getAllFournisseur(){

    return this.http.get(this.url+"/getAllFournisseur");
  }
  public findfournisseur(e){

    return this.http.post(this.url+"/findfournisseur",e);
  }
  public createClient(a) {
    return this.http.post(this.url +"/createClient",a);
  }
  public getCommandeAll(){
    return this.http.get(this.url+"/getCommandeAll");
  }
  public recherche(a){
    return this.http.post(this.url+"/rechercheCommande",a);
  }
  public getCommande(e){
    return this.http.post(this.url+"/getCommande",e);
  }

  public createCommande(a) {
    return this.http.post(this.url +"/createCommande",a);
  }
  public update(a) {
    return this.http.post(this.url + "/update", a);
  }
  public delete(a) {
    return this.http.post(this.url + "/suppCommande", a);
  }
}
