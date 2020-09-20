import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  item;
  itemDetails: any;
  itemImage: string;
  buttonValue: string = "Добавить в избранное";
  disabled: boolean = false;
  status: string = "Добавить в избранное";



  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.item = this.movieService.items[+params.get('itemId')];


      this.movieService.getMovieDetails(this.item.id).subscribe((res: any) => {
        this.itemDetails = res;
        this.itemImage = `https://image.tmdb.org/t/p/w500${this.itemDetails.backdrop_path}`;
      });
      if (this.item.added) {
        this.buttonValue = "Добавлено в избранное";
        this.disabled = true;
      }

    });


  }

  addToFavoritesButtonHandler(item) {
    this.movieService.addToFavorites(item);
    item.added = true;

  }

  defineGenres() {
    let genres = this.itemDetails.genres.map(item => {
      return item.name;
    });
    return genres.join(', ');
  }

  defineCompanies() {
    let companies = this.itemDetails.production_companies.map(item => {
      return item.name;
    });
    return companies.join(', ');
  }

  defineCountries() {
    let countries = this.itemDetails.production_countries.map(item => {
      return item.name;
    });
    return countries.join(', ');
  }

  defineLanguages() {
    let languages = this.itemDetails.spoken_languages.map(item => {
      return item.name;
    });
    return languages.join(', ');
  }


}

