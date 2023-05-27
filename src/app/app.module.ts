import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { CatalogListComponent } from './features/catalog/components/catalog-list/catalog-list.component';
import { CatalogFormComponent } from './features/catalog/components/catalog-form/catalog-form.component';
import { OsIconComponent } from './features/catalog/components/os-icon/os-icon.component';
import { PriceComponent } from './features/catalog/components/price/price.component';
import { CardComponent } from './shared/components/card/card.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    //features: catalog
    CatalogComponent,
    CatalogListComponent,
    CatalogFormComponent,
    OsIconComponent,
    PriceComponent,
    //shared
    CardComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
