import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NASA_URL} from "../shared/paths";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  headers = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {
  }

  getNasaData(): Promise<any> {
    return this._http.get<any>(NASA_URL).toPromise();
  }
}
