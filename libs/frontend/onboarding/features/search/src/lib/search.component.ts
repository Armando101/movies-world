import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMovie, MovieService } from '@olimpo/frontend/onboarding/data-access';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'frontend-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  movies: Array<IMovie> = [];
  loaderMovies = false;

  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.searchForm = this.fb.group({
      query: [''],
    });
    this.viewInputChanges();
  }

  viewInputChanges() {
    this.searchForm
      .get('query')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((value: string) => {
        if (value === '') {
          this.movies = [];
        } else {
          this.loadDataMovies(value);
        }
      });
  }

  loadDataMovies(value: string) {
    this.loaderMovies = true;
    this.movieService.getMoviesBySearch(value).subscribe((data) => {
      this.movies = data;
      this.loaderMovies = false;
    });
  }
}
