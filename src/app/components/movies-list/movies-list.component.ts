import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  moviesList = [];

  constructor(private dateService: DataService) {}

  ngOnInit() {
    this.dateService.getPopularMovies().subscribe((response) => {
      this.moviesList = response.results;
      console.log(this.moviesList)
    });
  }

}
