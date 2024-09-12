import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../flayout/layout/layout.component";
import { NavbarComponent } from "../../flayout/navbar/navbar.component";
import { MenuComponent } from "../../flayout/menu/menu.component";
import { FooterComponent } from "../../flayout/footer/footer.component";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutComponent, NavbarComponent, MenuComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
    
  }

}
