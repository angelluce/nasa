import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() title: string;
  @Input() searchType: boolean;
  @Output() response: EventEmitter<string> = new EventEmitter<string>();
  searchForm: FormGroup

  maxDate: Date;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.maxDate = this.getTodayDate();
  }

  initForm() {
    this.searchForm = this._formBuilder.group({
      date: [''],
      start_date: [''],
      end_date: ['']
    });
  }

  submitForm() {
    if (this.searchType) {
      if (this.searchForm.get('start_date')?.value === '' && this.searchForm.get('end_date')?.value === '') {
        return;
      } else {
        this.response.emit(`&start_date=${this.searchForm.get('start_date')?.value?.toISOString().split('T')[0]}&end_date=${this.searchForm.get('end_date')?.value?.toISOString().split('T')[0]}`);
      }
    } else {
      if (this.searchForm.get('date')?.value === '') {
        return;
      } else {
        this.response.emit(`&date=${this.searchForm.get('date')?.value?.toISOString().split('T')[0]}`);
      }
    }
  }

  getTodayDate() {
    return new Date();
  }

}
