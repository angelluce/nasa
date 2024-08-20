import { Component, OnInit } from '@angular/core';
import {MarsRoverPhoto} from "../../../models/MarsRoverPhoto";
import {EnumsNasa} from "../../../shared/enums";
import {NasaService} from "../../../services/nasa.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {
  nasaResponse: MarsRoverPhoto[];
  title: string;
  loading = false;
  date: string;

  constructor(private _nasaService: NasaService,
              private _messageService: MessageService) { }

  ngOnInit(): void {
    this.title = EnumsNasa.nasaMarsRover;
    // this.date = new Date().toISOString().split('T')[0];
    this.date = '2015-06-03';
    console.log(this.date);
    this.getNasaData()
  }

  getNasaData(): void {
    this.loading = true;
    this.nasaResponse = [];

    this._nasaService.getNasaMarsRover(this.date).subscribe({
      next: (data) => {
        this.nasaResponse = data.photos;
        this.loading = false;
        if (this.nasaResponse.length === 0) {
          this._messageService.add({
            severity: 'info',
            summary: 'Info',
            detail: 'No photos found for this date'
          });
        }
      },
      error: (err) => {
        console.log(err);
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
    event = event.split('=')[1];
    this.date = event;
    this.getNasaData();
  }

}
