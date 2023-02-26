import {Component, OnInit} from '@angular/core';
import {NasaService} from "../../services/nasa.service";
import {NasaResponse} from "../../models/NasaResponse";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nasaResponse: NasaResponse;
  display = false;

  constructor(private _nasaService: NasaService,
              private _messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getNasaData();
  }

  getNasaData(): void {
    this._nasaService.getNasaData()
      .then(data => {
        this.nasaResponse = data;
        this.display = true;
      })
      .catch(err => {
        this._messageService.add({severity: 'error', summary: 'Error', detail: 'Error retrieving data from NASA'});
      });
  }

}
