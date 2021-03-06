import { Component, OnInit } from '@angular/core';

import { IProduct } from './iproduct';
import { ProductService } from './product.service';

@Component({
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
  errorMessage: string;

  // We need to inject the service in the constructor to use it. Shorthand version
  constructor(private _productService : ProductService){
  }

  // Methods
  ngOnInit(): void {
    this.pageTitle = 'Product List';
    this.imageWidth = 100;
    this.imageMargin = 2;
    this.imagesActivated = false;
    this.listFilter = '';
    // We use the service to get the list of products
    this._productService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = <any>error);
  }
  toggleImage(): void{
    this.imagesActivated = !this.imagesActivated;
  }

  onRatingClient(message: string): void{
    console.log(message);
  }
}