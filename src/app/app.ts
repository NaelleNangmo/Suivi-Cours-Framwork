import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Content } from './content/content';
import { ModalAuth } from './modal-auth/modal-auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Content, RouterOutlet, ModalAuth ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }
