import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({

    username:new FormControl('',[Validators.required,Validators.max(30)]),
    password:new FormControl('',[Validators.required,Validators.max(20)]),

  });
  public mode=0;
  public result={};
  constructor(public route:Router ,public service:ServicesService) { }

  ngOnInit(): void {

  }

  getUsername(){
    return this.loginForm.get('username').value;
  }
  getPassword(){
    return this.loginForm.get('password').value;
  }


  async login() {

    let username=this.getUsername();
    let password=this.getPassword();

    const user = {username, password}

      let r=await this.service.getLogin(user).toPromise().then(res=>{
        if(res){
          this.route.navigateByUrl("/accueil");
           }
        else   this.route.navigateByUrl("/login");
      })

   /*
     this.service.getLogin(user).subscribe(data=>{
       console.log("user ",user )
       console.log("data ",data)
       this.route.navigateByUrl("/home")
     }),
       (err: any) => console.log(err)
    this.route.navigateByUrl("/login");*/

  }
}
