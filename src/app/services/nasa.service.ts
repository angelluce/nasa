import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NASA_APOD_URL, NASA_EPIC_IMAGE_URL, NASA_EPIC_URL} from "../shared/paths";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  headers = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {
  }

  getNasaApod(params: string): Observable<any> {
    return this._http.get<any>(`${NASA_APOD_URL}${params}`);
  }

  getNasaEpic(params: string): Observable<any> {
    return this._http.get<any>(`${NASA_EPIC_URL}${params}`);
  }

  getNasaEpicImage(date: string, image: string): Observable<any> {
    return this._http.get<any>(`${NASA_EPIC_IMAGE_URL(date, image)}`);
  }
}
