import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';


@Component({
  selector: 'app-favorites-films',
  templateUrl: './favorites-films.component.html',
  styleUrls: ['./favorites-films.component.scss']
})
export class FavoritesFilmsComponent implements OnInit {
  items:Array<any>;
  deleteStatus:string="Удалить из избранного";
  disabled:boolean = false;
  condition:boolean = true;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.items = JSON.parse(this.movieService.getFavorites()).items;
    this.items.forEach(item => {
      item.added = true;
  });
    this.movieService.addToItems(this.items);

  }

  deleteFavoritesButtonHandler(item, e) {
    this.movieService.deleteFromFavorites(item);
    item.added = false;
    }

}
