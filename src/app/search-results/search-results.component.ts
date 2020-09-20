import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  requiredFilm;
  items = [];
  status: string = "Добавить в избранное";
  arrayLength: number;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.requiredFilm = params.get('requiredFilm');


    });

    this.movieService.searchFilm(this.requiredFilm).subscribe((res: any) => {
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
      this.movieService.addToItems(this.items);

    });

    this.arrayLength = this.movieService.items.length;

  }

  addToFavoritesButtonHandler(item) {
    this.movieService.addToFavorites(item);
    item.added = true;


  }

}
