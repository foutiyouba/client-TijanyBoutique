import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  searchForm;

/*  searchForm=new FormGroup({

    search: new FormControl('', [Validators.required, Validators.max(30)]),
  });*/
  public mode=0;
  public result:any;
  public chercher={};

  constructor(public service:ServicesService, private formBuilder:FormBuilder) {

    this.searchForm=this.formBuilder.group({
      search:''
    })
  }

  ngOnInit(): void {
    this.getAllFournisseur();
  }


  getAllFournisseur(){
    this.service.getAllFournisseur().subscribe(res=>{
      this.result=res;
      console.log("liste des fournisseurs ", res);
    })
  }
  recherche() {
       let fournisseur={
         nomFournisseur:this.searchForm.get('search').value
       }

    console.log("fournisseur", fournisseur.nomFournisseur)
       this.service.findfournisseur(fournisseur).subscribe(res=>{
         this.mode=1;
         this.chercher=res;
         console.log("chercher", this.chercher)
       })
  }
}

