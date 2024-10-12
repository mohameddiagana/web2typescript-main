import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}


   login(email?: string, pwd?: string): boolean{
    return(email == "mdiag@samanecorp.com" && pwd == "passer")?true: false;

   }

   getAuthToken():string {
    return '';

   }
   isAuth(): boolean{
    return true;
   }
}
