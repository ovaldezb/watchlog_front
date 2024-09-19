import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../../flayout/navbar/navbar.component";
import Swal from 'sweetalert2';
import { LoginFormComponent } from "../login-form/login-form.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy{


  ngOnDestroy() {
    // Limpia referencias si es necesario
  }
  

    
}
