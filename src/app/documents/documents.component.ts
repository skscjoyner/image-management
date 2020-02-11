import { Component, OnInit } from '@angular/core';
import { Upload } from '../models/upload';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: Document[];

  constructor() { }

  ngOnInit() {
  }

  upload(upload: Upload) {

  }

  delete(document: Document): void {
    // method
  }
}
