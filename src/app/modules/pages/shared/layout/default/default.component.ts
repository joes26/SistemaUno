import { Component, OnInit } from '@angular/core';
//import { Constants } from 'src/app/modules/core/common/constants';
import { Router } from '@angular/router';
//import { AuthService } from 'src/app/modules/core/services/auth.service';
//import { UserService } from '../../services/user.service';
//import { User } from '../../../../core/models/user';

@Component({
  selector: 'shared-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  showToggleMenu = false;
  showButtonToggleMenu = true;
  showToggleIconoSociedad = true;
  aplicacion = '';
  showContent = false;
  //currentUser: User = {} as any;

  constructor(
    //private userService: UserService,
    private router: Router) {
    this.aplicacion = "";//Constants.Core.Titulo;
    //this.evaluateSession();
  }

  ngOnInit() {

  }

  toggelMenu() {

    if (this.showToggleMenu) {
      this.showToggleMenu = false;
      this.showToggleIconoSociedad = true;
    } else {
      this.showToggleMenu = true;
      this.showToggleIconoSociedad = false;
    }
  }

  hideSidebar() {
    this.showToggleMenu = false;
    this.showToggleIconoSociedad = true;
  }

  logout() {
    //AuthService.logout();
    this.router.navigate(['']);
  }

  /*private evaluateSession() {
    this.currentUser = AuthService.getUser();
    if (this.currentUser === null || this.currentUser === undefined) {
      const authAppToken = AuthService.getToken();
      if (authAppToken === null){
        AuthService.logout();
        this.router.navigate(['']);
      }
        
      else
        this.obtenerInformacionUsuario();
    }
    else {

      this.showContent = true;
      this.evaluateSociety(this.currentUser.Sociedad);
    }
  }*/

  /*private obtenerInformacionUsuario() {
    this.userService.obtenerInformacionUsuario()
      .subscribe(data => {
        if (data.status === Constants.Core.HttpResponse.Success) {
          this.currentUser = {
            Name: data.data.nombre + " " + data.data.apellidoPaterno,
            Roles: data.data.roles[0].descripcion,
            Menus: data.data.menus,
            Sociedad: data.data.sociedadId
          };
          AuthService.setUser(this.currentUser);
          this.showContent = true;
          this.evaluateSociety(this.currentUser.Sociedad);
        }
        else{
          AuthService.logout();
          this.router.navigate(['']);
        }
      }, (error: any) => {
        AuthService.logout();
        this.router.navigate(['']);
      });
  }*/

  /*private evaluateSociety(societyCode) {
    switch (societyCode) {
      case Constants.Core.Sociedad.Ferreyros:
        document.documentElement.style.setProperty('--primary-color', '#F2BC12');
        document.documentElement.style.setProperty('--primary-text-color', '#000');
        document.documentElement.style.setProperty('--primary-hover-color', '#e0a800');
        break;
      case Constants.Core.Sociedad.NuevoFerreyros:
        document.documentElement.style.setProperty('--primary-color', '#F2BC12');
        document.documentElement.style.setProperty('--primary-text-color', '#000');
        document.documentElement.style.setProperty('--primary-hover-color', '#e0a800');
        break;
      case Constants.Core.Sociedad.Ferrycorp:
        document.documentElement.style.setProperty('--primary-color', '#015c1b');
        document.documentElement.style.setProperty('--primary-text-color', '#fff');
        document.documentElement.style.setProperty('--primary-hover-color', '#28a745');
        break;
      default:
        document.documentElement.style.setProperty('--primary-color', '#F2BC12');
        document.documentElement.style.setProperty('--primary-text-color', '#fff');
        document.documentElement.style.setProperty('--primary-hover-color', '#e0a800');
        break;
    }
  }*/
}
