import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public roles={};
  constructor(public service:ServicesService) { }

  ngOnInit(): void {
    this.getAllRole();
  }
  getAllRole(){
    this.service.getAllRole().subscribe(res=>{
      this.roles=res;
      console.log("roles", this.roles);
    })
  }

}
