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

  constructor() {
  }

  ngOnInit(): void {
  }


}
