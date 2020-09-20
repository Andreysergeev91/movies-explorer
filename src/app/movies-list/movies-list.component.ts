import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  items: any[] = [];
  films: any[] = [];
  status: string = "Добавить в избранное";



  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMoviesList(1).subscribe((res: any) => {
      this.items = res.results;
      const added = JSON.parse(this.movieService.getFavorites()) ? JSON.parse(this.movieService.getFavorites()).items : [];
      this.items.forEach(item => {
        item.added = false;
        for (let i: number = 0; i < added.length; i++) {
          if (added[i].id == item.id) {
            item.added = true;

          }
          continue;
        }
      });
      this.films = this.items.slice(0, 5);
      this.movieService.addToItems(this.films);
    });
    this.movieService.getMoviesList(2).subscribe((res: any) => {
      const added = JSON.parse(this.movieService.getFavorites()) ? JSON.parse(this.movieService.getFavorites()).items : [];
      res.results.forEach(item => {
        item.added = false;
        for (let i: number = 0; i < added.length; i++) {
          if (added[i].id == item.id) {
            item.added = true;

          }
          continue;
        }
      });
      this.items = [...this.items, ...res.results];
    });

  }

  addToFavoritesButtonHandler(item) {
    this.movieService.addToFavorites(item);
    item.added = true;


  }

  changePage(e) {
    this.films = this.items.slice(e.pageIndex * 5, ((e.pageIndex * 5) + 5));
    this.movieService.addToItems(this.films);
  }

}
