import { Component } from '@angular/core';
import { NavbarComponent } from "../flayout/navbar/navbar.component";
import { MenuComponent } from "../flayout/menu/menu.component";
import { FooterComponent } from "../flayout/footer/footer.component";
import { DashboardFormComponent } from "../dashboard-form/dashboard-form.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MenuComponent, FooterComponent, DashboardFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
