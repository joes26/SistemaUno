import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastUtil } from '../../../../core/common/toast.util';
import { Constants } from '../../../../core/common/constants';

//import { User } from '../../../../core/models/user';
// import { LoginService } from '../../services/login.service';
import { AuthService } from '../../../../core/services/auth.service';
import * as $ from "jquery";

@Component({
  selector: 'public-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  //sociedades = [];
  valid = true;
  //currentUser: User = {} as any;
  fieldTextType: boolean = false;
  tittle: string = '';
  //icon1:string='fas fa-eye';

  constructor(protected router: Router,
    // private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    const token = AuthService.getToken();
    if ((token != null || token != undefined) && AuthService.loggedIn()){
      this.router.navigate(['/home/']);
    } else {
      AuthService.logout();
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.tittle = Constants.Core.Titulo;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    //if (this.sociedades.length == 0){
      this.login();
    //} else {
      //this.loginWithSociety();
    //}
  }

  onChange() {
    //this.loginWithSociety();
  }
  cambioUsuario() {
    //const self = this;
    //setInterval(function () { self.loginForm.get('societycode').clearValidators(); }, 200);
    //this.sociedades = [];
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;

    var icon = $('#viewpassword');
    if (!this.fieldTextType) {
        icon.attr('data-icon', 'eye');
    } else {
        icon.attr('data-icon', 'eye-slash');
    }
  }

  private login() {
    ///*
    // this.loading = true;
    // if (this.loginForm.valid) {
    //   this.loginService.login(
    //     this.loginForm.value['username'],
    //     this.loginForm.value['password']
    //   )
    //     .subscribe(data => {
    //       switch (data.status) {
    //         case Constants.Core.HttpResponse.Success:
    //           this.setUserSession(data.data);
    //           if(AuthService.verifyEmptyToken())
    //             this.router.navigate(['/home/']);
    //           break;
    //         default:
    //           ToastUtil.show('error', data.message);
    //           break;
    //       }
    //       this.loading = false;
    //     }, (error: any) => {
    //       this.loading = false;
    //     });
    // }
  }
  private loginWithSociety() {
    /*if (!this.loginForm.valid || this.loginForm.value['societycode'].length == 0)
      return;
    this.loading = true;
    this.authService.loginSociedad(
      this.loginForm.value['username'],
      this.loginForm.value['password'],
      this.loginForm.value['societycode']
    )
      .subscribe(data => {
        if (data.status == Constants.Core.HttpResponse.Success) {
          this.setUserSession(data.data);
          if(AuthService.verifyEmptyToken)
            this.router.navigate(['/tracking/recepcion']);
        }
        else {
          ToastUtil.show('error', data.message);
        }
        this.loading = false;
      },
        error => {
          this.loading = false;
        }
      );*/
  }

  private setUserSession(data: any) {
    /*.currentUser.Name = data.nombre + " " + data.apellidoPaterno;
    this.currentUser.Roles = data.roles[0].descripcion;
    this.currentUser.Menus = data.menus;
    this.currentUser.Sociedad = data.sociedadId;

    AuthService.setUser(this.currentUser);
    AuthService.setToken(data.token);*/
  }
}
