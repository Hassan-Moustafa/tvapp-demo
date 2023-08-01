import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {


  movieDetails: any;
  posterImageBaseUrl = '';


  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    let movieId = this.activatedRoute.snapshot.params['id'];
    this.posterImageBaseUrl = this.dataService.imageBaseUrl;


    this.dataService.getMovieDetailsByID(movieId).subscribe((response) => {
      console.log(response);
      this.movieDetails = response;
    })

  }

  back() {
    window.history.back();
  }

}
