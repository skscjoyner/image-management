import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(uploadService: UploadService) { }

  ngOnInit() {
  }

}
