import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  authToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmEzN2NkZmUyYTYxOWY1ZjU1YjQyZDI0MjRlYzFmZSIsInN1YiI6IjVmNDUwYWIxMWQwMTkxMDAzM2RhMjU0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c4OhzbDv8m_zagYmpCiyXqDXdLPGhleqa-vsq19DS2o';
  imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  constructor(private httpClient: HttpClient) { }

  getPopularMovies() {
    return this.httpClient.get<any>('https://api.themoviedb.org/3/movie/popular', {
      headers: new HttpHeaders({
        'Authorization': this.authToken
      })
    });
  }

  getMovieDetailsByID(movieId: number) {
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: new HttpHeaders({
        'Authorization': this.authToken
      })
    });
  }
}
