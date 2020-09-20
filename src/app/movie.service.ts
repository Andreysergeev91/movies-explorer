import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface favoritesInterface {
  items: object[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  items = [];
  requiredFilms;
  favorites: favoritesInterface = {
    items: Array(),
  };
  constructor(private http: HttpClient) { }

  addToFavorites(movie) {
    try {
      const savedFilms = JSON.parse(this.getFavorites()).items;
      this.favorites.items = [...savedFilms];
      this.favorites.items.push(movie);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    } catch (err) {
      this.favorites.items.push(movie);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    }

  }

  getFavorites() {
    return localStorage.getItem("favorites");
  }

  deleteFromFavorites(item) {
    const savedFilms = JSON.parse(this.getFavorites()).items;
    const reducedFilmsArray = savedFilms.filter(film => {

      return film.id !== item.id;
    });

    this.favorites.items = reducedFilmsArray;
    localStorage.removeItem("favorites");
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  getMoviesList(n: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=a24d683a8679fcb9a092cb0dc202820e&language=ru-US&page=${n}`);
  }

  addToItems(movies) {
    this.items = [...movies];
  }

  getMovieDetails(moviveId) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${moviveId}?api_key=a24d683a8679fcb9a092cb0dc202820e&language=ru-RU`);
  }

  searchFilm(film) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=a24d683a8679fcb9a092cb0dc202820e&language=ru-RU&query=${film}&page=1&include_adult=false`);

  }

}
