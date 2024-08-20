import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {NasaService} from "../../../services/nasa.service";
import {ApodResponse} from "../../../models/ApodResponse";
import {EnumsNasa} from "../../../shared/enums";

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  nasaResponse: ApodResponse;
  title: string;
  loading = false;

  constructor(private _nasaService: NasaService,
              private _messageService: MessageService) {
  }

  ngOnInit(): void {
    this.title = EnumsNasa.nasaApod;
    this.getNasaData();
  }

  getNasaData(params?: string): void {
    this.nasaResponse = new ApodResponse();
    this.loading = true;
    this._nasaService.getNasaApod(params ? params : '').subscribe({
      next: (data) => {
        this.nasaResponse = data;
        this.loading = false;
      },
      error: (err) => {
        // console.log(err)
        this.nasaResponse = new ApodResponse();
        this.loading = false;
        this._messageService.add({severity: 'error', summary: 'Error', detail: err.error.msg || 'Error retrieving data from NASA'});
      }
    });
  }

  searchNasaData(event: string) {
    this.getNasaData(event);
  }

}
