import { Component, OnInit } from '@angular/core';

import { IProduct } from './iproduct';

@Component({
  selector: 'pm-products',
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
  // Properties
  pageTitle: string;
  imageWidth: number;
  imageMargin: number;
  imagesActivated: boolean;
  listFilter: string;
  products: IProduct[];

  // Methods
  ngOnInit(): void {
    this.pageTitle = 'Product List';
    this.imageWidth = 100;
    this.imageMargin = 2;
    this.imagesActivated = false;
    this.listFilter = '';
    this.products = [{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }];
  }
  toggleImage(): void{
    this.imagesActivated = !this.imagesActivated;
  }

  onRatingClient(message: string): void{
    console.log(message);
  }
}