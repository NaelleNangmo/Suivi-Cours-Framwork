import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ModalAuth } from "../modal-auth/modal-auth";

@Component({
  selector: 'app-header',
  imports: [RouterLink, ModalAuth],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
