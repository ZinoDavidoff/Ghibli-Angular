import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL = 'https://ghibliapi.vercel.app/films';

  //'192.168.0.1/users/id'
  //'192.168.0.1/data/id'

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.URL);
  }

  getMovieDetails(id: string) {
    return this.http.get(this.URL + '/' + id);
  }

}
