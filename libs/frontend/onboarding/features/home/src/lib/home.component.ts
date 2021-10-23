import { Component, OnInit } from '@angular/core';
import { IMovie, MovieService } from '@olimpo/frontend/onboarding/data-access';

@Component({
  selector: 'frontend-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Array<IMovie> = [];
  topMovies: Array<IMovie> = [];
  popularMoviesLoader = true;
  topMoviesLoader = true;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadPopularMovies();
    this.loadTopMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data;
      this.popularMoviesLoader = false;
    });
  }

  loadTopMovies() {
    this.movieService.getTopRatedMovies().subscribe((data) => {
      this.topMovies = data;
      this.topMoviesLoader = false;
    });
  }
}
