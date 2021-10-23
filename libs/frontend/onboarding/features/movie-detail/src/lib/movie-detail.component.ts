import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ICast,
  ICrew,
  IMovie,
  MovieService,
} from '@olimpo/frontend/onboarding/data-access';

@Component({
  selector: 'frontend-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  title!: string;
  backdropUrl!: string;
  details!: IMovie;
  cast!: Array<ICast>;
  crew!: Array<ICrew>;
  movies: Array<IMovie> = [];
  id!: string;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.loadDetails();
    this.loadCredits();
    this.loadRelatedMovies();
  }

  loadDetails() {
    this.movieService.getMovieDetails(this.id).subscribe((data) => {
      this.details = data;
    });
  }

  loadCredits() {
    this.loadCast();
    this.loadCrew();
  }

  loadCast() {
    this.movieService.getMovieCast().subscribe((data) => {
      this.cast = data;
    });
  }

  loadCrew() {
    this.movieService.getMovieCrew().subscribe((data) => {
      this.crew = data;
    });
  }

  loadRelatedMovies() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
