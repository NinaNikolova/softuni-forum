import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getPosts(limit?: number) {
    const { appUrl } = environment;
    const limitFilter=limit ? `?limit=${limit}`: ''
    return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`)
  }
  getThemes() {
    // return observable
    const { appUrl } = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`)
  }
  getTheme(id:string) {
    // return observable
    const { appUrl } = environment;
    return this.http.get<Theme>(`${appUrl}/themes/${id}`)
  }
}
