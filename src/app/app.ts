import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Content } from './content/content';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    Content,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Ma prmiere donnee';
}
