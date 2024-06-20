import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-a-propos-de-nous',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './a-propos-de-nous.component.html',
  styleUrls: ['./a-propos-de-nous.component.css']
})
export class AProposDeNousComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkUrlAndHideButton();
      }
    });
  }

  checkUrlAndHideButton(): void {
    const buttons = document.querySelectorAll('.hide') as NodeListOf<HTMLElement>;
    buttons.forEach(button => {
      if (this.router.url.includes('about')) {
        this.renderer.setStyle(button, 'display', 'none');
      } else {
        this.renderer.removeStyle(button, 'display');
      }
    });
  }
}
