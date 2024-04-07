import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, RouterOutlet } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, LandingComponent, CommonModule, RouterLink, RouterLinkActive ],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = '&ME Entertainment';
  
  constructor(public router: Router) {}

  ngOnInit() {
    this.router.navigate(['/landing']);
  }

  
  
}


