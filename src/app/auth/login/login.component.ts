import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {

  }
  connexion() {
    //console.log(this.email + '  ' + this.password)

    if (this.email == 'mdiag@samanecorp.com'&& this.password == 'passer') {
      localStorage.setItem('userSession', this.email);

      this.router.navigate(['/home']);
    }else{  
      this.password = '';
    }
  }
}
