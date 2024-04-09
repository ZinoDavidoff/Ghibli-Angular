import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {
  movies: Movie[] = [];
  title: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // on Initialization
    this.title = 'All Movies';
    this.getMoviesOnClick();
  }

  getMoviesOnClick() {
    this.movieService.getMovies().subscribe(
      (response: any) => this.movies = response
    );
  }
}
