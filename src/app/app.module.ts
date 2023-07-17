import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { TagsComponent } from './components/partials/tags/tags.component';
// import { PartialsComponent } from './components/partials/partials.component';
// import { SearchComponent } from './components/partials/search/search.component';
import { SearchComponent } from './partials/search/search.component';
// import { CartPageComponent } from './componenets/cart-page/cart-page.component';
import { CartPageeComponent } from './components/cart-pagee/cart-pagee.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
// import { RatingModule } from 'ng-starrating';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FoodPageComponent,
    TagsComponent,
    // PartialsComponent,
    SearchComponent,
    // CartPageComponent,
    CartPageeComponent,
    TitleComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
