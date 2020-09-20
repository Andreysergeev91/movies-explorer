import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ButtonAddToFavoritesComponent } from './button-add-to-favorites/button-add-to-favorites.component';
import { FavoritesFilmsComponent } from './favorites-films/favorites-films.component';
import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieComponent,
    ToolbarComponent,
    MovieDetailsComponent,
    ButtonAddToFavoritesComponent,
    FavoritesFilmsComponent,
    SearchResultsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDividerModule,
    TextFieldModule,
    RouterModule.forRoot([
      { path: '', component: MoviesListComponent },
      { path: 'items/:itemId', component: MovieDetailsComponent },
      { path: 'favorites', component: FavoritesFilmsComponent },
      { path: 'search-results/:requiredFilm', component: SearchResultsComponent },
   ],
   {
      onSameUrlNavigation: "reload",
   })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
