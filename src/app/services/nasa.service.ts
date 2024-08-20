import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  MARS_ROVER_PHOTOS_URL,
  NASA_APOD_URL,
  NASA_EPIC_BY_DATE_URL,
  NASA_EPIC_URL
} from "../shared/paths";
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

  getNasaEpic(date?: string): Observable<any> {
    if (date) {
      return this._http.get<any>(`${NASA_EPIC_BY_DATE_URL(date)}`);
    } else {
      return this._http.get<any>(`${NASA_EPIC_URL}`);
    }
  }

  getNasaMarsRover(date: string): Observable<any> {
    return this._http.get<any>(`${MARS_ROVER_PHOTOS_URL(date)}`);
  }
}
