import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-management';

  @ViewChild(SearchComponent, { static: true }) searchComponent: SearchComponent;

  public documents = [
    { name: 'Number 1' , size: '100kb' },
    { name: 'Number 2' , size: '100kb' },
    { name: 'Number 3' , size: '200kb' },
    { name: 'Number 4' , size: '200kb' },
    { name: 'Number 5' , size: '110kb' },
    { name: 'Number 6' , size: '110kb' },
    { name: 'Number 7' , size: '75kb' },
    { name: 'Number 8' , size: '75kb' }
  ];
}
