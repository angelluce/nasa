import {Component, OnInit} from '@angular/core';
import {NasaResponse} from "../../../models/NasaResponse";
import {NasaService} from "../../../services/nasa.service";
import {MessageService} from "primeng/api";
import {EnumsNasa} from "../../../shared/enums";

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  nasaResponse: NasaResponse;
  title: string;
  display = false;

  constructor(private _nasaService: NasaService,
              private _messageService: MessageService) {
  }

  ngOnInit(): void {
    this.title = EnumsNasa.nasaApod;
    this.getNasaData();
  }

  getNasaData(): void {
    this._nasaService.getNasaApod()
      .then(data => {
        this.nasaResponse = data;
        this.display = true;
      })
      .catch(err => {
        this._messageService.add({severity: 'error', summary: 'Error', detail: 'Error retrieving data from NASA'});
      });
  }
}
