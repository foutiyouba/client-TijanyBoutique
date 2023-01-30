import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServicesService} from "../service/services.service";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {


  commandeForm=new FormGroup({

    prenom:new FormControl('',[Validators.required,Validators.max(30)]),
    nom:new FormControl('',[Validators.required,Validators.max(20)]),
    adresse:new FormControl('',[Validators.required,Validators.max(20)]),
    numero:new FormControl('',Validators.required),
    jellabe:new FormControl('',Validators.required),
    prix:new FormControl('',Validators.required),

  });
  public mode=0;
  public result={};
  constructor(public service:ServicesService) { }

  ngOnInit(): void {

  }

  getPrenom(){
    return this.commandeForm.get('prenom').value;
  }
  getNom(){
    return this.commandeForm.get('nom').value;
  }
  getTelephone(){
    return this.commandeForm.get('numero').value;
  }
  getJellabe(){
    return this.commandeForm.get('jellabe').value;
  }
  getAdresse(){
    return this.commandeForm.get('adresse').value;
  }
  getPrix(){
    return this.commandeForm.get('prix').value;
  }

  save() {
    var  prenom=this.getPrenom();
    var  nom=this.getNom();
    var  telephone=this.getTelephone();
    var  nomJellabe=this.getJellabe();
    var  adresse=this.getAdresse();
    var  prix=this.getPrix();


    const commande = {
              nomJellabe, prix,
      client:{
                prenom,
                nom,
                telephone,
                adresse,
             },
           }
    console.log("commaandef", this.commandeForm);
    this.service.createCommande(commande).subscribe(res=>{
      console.log("Commande bien enregistré", res);
      this.result=res;
      this.mode=1;
    }),
      (err: any) => console.log(err)
  }

}
