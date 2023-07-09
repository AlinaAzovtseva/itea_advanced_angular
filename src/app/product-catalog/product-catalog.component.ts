import { Component,  } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent  {

products:any;

	constructor(public api: GetDataService) {}

  ngAfterViewInit(): void {
    // this.api.getData().subscribe(data => {
    //   this.products = data;
    //   console.log(this.products)

    this.api.getData()
      .pipe(
        map(products => products.filter((product:any) => product.id <= 5)),
        map(products => products.map((product:any)=> ({
          title:product.title, 
          price: product.price,
          description: product.description,
          image: product.image
        })))
      ).subscribe((value: any[]) => console.log(value));
      
    };
  }
  

 


