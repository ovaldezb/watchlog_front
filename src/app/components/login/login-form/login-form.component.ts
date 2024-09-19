import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

export class LoginFormComponent implements OnDestroy {

  isAuthenticated: boolean;
  loading: boolean = false;
  user: User = {} as User;
  res: any = {};
  response: any = {};
  accessToken: string = '';
  newPassword1: string = '';
  newPassword2: string = '';
  authStatus: string = '';
  session: any;

  constructor(

    private router: Router,


  ) { this.isAuthenticated = false; }



  ngOnDestroy() {
    // Limpia referencias si es necesario
  }
  

  
  public signIn(): void {

    console.log('Attempting to sign in...');
    this.loading = true;

    if (this.user.email.endsWith('@gmail.com') && this.user.password === "watchdog") {  

      this.router.navigate(['dashboard']);
      
    } else {

      this.isAuthenticated = false;
      this.authStatus = "bad password"
      this.loading = false;

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Passwords incorrect, try again.",
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 2345,

      });

    }

  }

}