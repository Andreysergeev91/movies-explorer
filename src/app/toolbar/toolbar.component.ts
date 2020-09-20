import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  constructor(
    private movieService: MovieService,

    ) {   }

  ngOnInit(): void {
  }



}
