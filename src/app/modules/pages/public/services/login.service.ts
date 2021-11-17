import { forwardRef, Injectable, Optional } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable(
  { providedIn: 'root' }
)
export class LoginService {

  constructor(private apiService: ApiService) {
  }
  //    /*
  login(Username: string, Password: string) {
    const url = `/login`;
    const result = this.apiService.post(url, { Username, Password });
      //.pipe(
      //  map((res) => {
      //    return res;
      //  }));
    return result;
  }//*/

  /*loginSociedad(Username: string, Password: string, SocietyCode: string) {
    const url = `/Seguridad/Auth/AutenticarUsuarioConSociedad`;
    const result = this.apiService.post(url, { Username, Password, SocietyCode });
      //.pipe(
      //  map((res) => {
      //    return res;
      //  }));
    return result;
  }*/

}
