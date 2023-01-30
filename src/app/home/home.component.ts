import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServicesService} from "../service/services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public result={};
  public mode=0;
  constructor(private routes:Router, private service:ServicesService) { }

  ngOnInit(): void {
  }


  openCommande() {
    this.routes.navigateByUrl("/commandes");
  }

  openClient() {
    this.routes.navigateByUrl("/clients");
  }

  commandes() {

    this.getCommandeAll();
  }
  public getCommandeAll(){
    this.service.getCommandeAll().subscribe(res=>{
      console.log("TOUTES LES COMMANDES", res);
      this.result=res;
      this.mode=1;
      this.routes.navigateByUrl("/home");
    }),
      (err: any) => console.log(err)
  }


}


