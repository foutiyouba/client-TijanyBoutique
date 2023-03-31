import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ServicesService} from "../service/services.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-commandes-list',
  templateUrl: './commandes-list.component.html',
  styleUrls: ['./commandes-list.component.scss']
})
export class CommandesListComponent {
  /** Based on the screen size, switch from standard to one column per row */

  public mode=0;
  public ok=0;
  public resultat={};
  public donnee={};
  public result={};
  term: any;

  searchForm=new FormGroup({

    search: new FormControl('', [Validators.required, Validators.max(30)]),
  });
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
      ];
    })
  );



  constructor(private breakpointObserver: BreakpointObserver,
              public service:ServicesService, public router:Router) {}

  ngOnInit(): void {
    this.getCommandeAll();
  }

  getRecherche(){
    return this.searchForm.get('search').value;
  }
  public getCommandeAll(){
    this.service.getCommandeAll().subscribe(res=>{
      console.log("TOUTES LES COMMANDES", res);
      this.donnee=res;
      this.mode=1;
      this.ok=0;
    }),
      (err: any) => console.log(err)
  }


  recherche() {
     var i=this.getRecherche();
    const commande ={
      numCommande:i,
    }
    console.log("searchform", this.searchForm)
    this.service.getCommande(commande).subscribe(res=>{
      console.log("LA COMMANDE EST ", res);
      this.donnee=res;
      this.ok =1;
      this.mode=0;

    }),
      (err: any) => console.log(err)

  }

  r() {
    this.router.navigateByUrl("/clients")
  }

  supprimer(uid) {
    var res=confirm("Etes vous sur de supprimé ?");

    if (res)
    {
      const commande = {
        meta:{
          uid:uid
        }}
      this.service.delete(commande).subscribe(res=>{
        console.log("l'element  a ete bien supprime", res);
        this.router.navigateByUrl("/home")

      }),
        (err: any) => console.log(err)
    }

  }

  modifier(uid) {
    const commande = {
                  meta:{
                   uid:uid
                    }}
    this.service.recherche(commande).subscribe(res=>{
      this.resultat=res;
      console.log("lelement rechercher est ", this.resultat)
    })

  }
}
