import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer'; // <-- Lo importamos

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent], // <-- Lo agregamos a la lista
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'enmatech';
}