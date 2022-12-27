import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  constructor(private routes:Router) { }

  ngOnInit(): void {
  }


  openCommande() {
    this.routes.navigateByUrl("/commandes");
  }

  openClient() {
    this.routes.navigateByUrl("/clients");
  }

  commandes() {

  }
}

