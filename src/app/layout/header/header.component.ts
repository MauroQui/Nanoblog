import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule //para que me funcione los routerlinks del html header
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
