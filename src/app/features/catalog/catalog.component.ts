import { CatalogService } from './services/catalog.service';
import { Component } from '@angular/core';
import { CatalogStore } from './services/catalog.store';

@Component({
  selector: 'fb-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  constructor(public actions: CatalogService, public store: CatalogStore){
    actions.getAll()
  }
}
