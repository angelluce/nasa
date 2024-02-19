import {Component, OnInit} from '@angular/core';
import {NasaService} from "../../../services/nasa.service";
import {MessageService} from "primeng/api";
import {EpicResponse} from "../../../models/EpicResponse";
import {EnumsNasa} from "../../../shared/enums";
import {NASA_EPIC_IMAGE_URL} from "../../../shared/paths";

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {
  nasaResponse: EpicResponse[] | any[];
  title: string;
  loading = false;

  constructor(private _nasaService: NasaService,
              private _messageService: MessageService) {
  }

  ngOnInit(): void {
    this.title = EnumsNasa.nasaEpic;
    this.getNasaData();
  }

  getFormattedDate(date: string) {
    const dateString = date.split(' ')[0];
    return dateString.replace(/-/g, '/');
  }

  getNasaData(params?: string): void {
    this.nasaResponse = [];
    this.loading = true;
    this._nasaService.getNasaEpic(params ? params : '').subscribe({
      next: (data) => {
        this.nasaResponse = data.map((item: any) => {
          const date = this.getFormattedDate(item.date);
          return {
            ...item,
            date: item.date,
            image: NASA_EPIC_IMAGE_URL(date, item.image)
          }
        });
        this.loading = false;
      },
      error: (err) => {
        this.nasaResponse = [];
        this.loading = false;
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.msg || err.error.message || 'Error retrieving data from NASA'
        });
      }
    });
  }

  searchNasaData(event: string) {
    console.log(event);
  }

}
