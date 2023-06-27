import { Component, AfterViewInit } from '@angular/core';
import { GetDataService } from './get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	products:any;

	constructor(public api: GetDataService) {}

  ngAfterViewInit(): void {
    this.api.getData().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
  }
}
