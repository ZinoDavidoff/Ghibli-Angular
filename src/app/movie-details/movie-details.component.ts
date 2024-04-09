import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  movieId!: string | null;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetails();
  }

  getMovieDetails() {
      this.movieService
      .getMovieDetails(this.movieId!)
      .subscribe(
        (res: any) => this.movie = res
      )
  }
}
