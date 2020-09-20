import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {genresConverter} from '../movie-genres-converter';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  imageLink:string;

  @Input() item:any;



  constructor() { }

  ngOnInit() {
    this.imageLink = `https://image.tmdb.org/t/p/w400${this.item.poster_path}`;
  }


  defineGenre() {
  let genres =  this.item.genre_ids.map(item => {
      return genresConverter(item);
    });
    return genres.join(', ')
  }

}
