import { Routes } from '@angular/router';
import { AProposDeNousComponent } from './a-propos-de-nous/a-propos-de-nous.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MoreCatalogueComponent } from './more-catalogue/more-catalogue.component';
import { MoreAvisComponent } from './more-avis/more-avis.component';


// export const routes: Routes = [];

export const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
    path: 'catalogue',
    component: MoreCatalogueComponent,
  },
  {
    path: 'about',
    component: AProposDeNousComponent,
  },
  {
    path: 'avis',
    component: MoreAvisComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
]
