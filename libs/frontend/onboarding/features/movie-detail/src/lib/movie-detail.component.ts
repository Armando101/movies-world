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
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      window.scroll(0, 0);
      this.initializeData();
    });
  }

  initializeData() {
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
    this.movieService.getCredits(this.id).subscribe(({ cast, crew }) => {
      this.cast = cast.slice(0, 50);
      this.crew = crew.slice(0, 50);
    });
  }

  loadRelatedMovies() {
    this.movieService.getSimilarMovies(this.id).subscribe((data) => {
      this.movies = data;
    });
  }
}
