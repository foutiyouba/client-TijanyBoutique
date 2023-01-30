import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../service/services.service";
import {any} from "codelyzer/util/function";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {


  clientForm=new FormGroup({

    prenomClient:new FormControl('',[Validators.required,Validators.max(30)]),
    nomClient:new FormControl('',[Validators.required,Validators.max(30)]),
    telephoneClient:new FormControl('',Validators.required),
    adresseClient:new FormControl('',Validators.required),


  });
  public mode=0;
  public result={};
  constructor(public service:ServicesService) { }

  ngOnInit(): void {

  }

  getPrenom(){
    return this.clientForm.get('prenomClient').value;
  }
  getNom(){
    return this.clientForm.get('nomClient').value;
  }
  getTelephone(){
    return this.clientForm.get('telephoneClient').value;
  }
  getAdresse(){
    return this.clientForm.get('adresseClient').value;
  }
  save() {

    var  prenom=this.getPrenom();
    var   nom=this.getNom();
    var   telephone=this.getTelephone();
    var   adresse=this.getAdresse();


    const client =  {
      prenom,
      nom,
      telephone,
      adresse,
    }
    console.log("this", this.clientForm)
    this.service.createClient(client).subscribe(res=>{
      console.log("Client bien enregistré", res);
       this.result=res;
       this.mode=1;
       }),
      (err: any) => console.log(err)
      }

}
