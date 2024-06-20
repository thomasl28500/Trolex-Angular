import { Component } from '@angular/core';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { AProposDeNousComponent } from '../a-propos-de-nous/a-propos-de-nous.component';
import { AvisClientComponent } from '../avis-client/avis-client.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CatalogueComponent, AProposDeNousComponent, AvisClientComponent, ContactComponent, RouterLink],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {

}
