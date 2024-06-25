import { Component, OnInit } from '@angular/core';
import { productsList } from './products.mock'; 
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    // Ahora no usaremos mas un mock, traeriamos las cosas del servidor
    // productsList = productsList 

    productList: IProduct[] = []

    constructor(private _apiService: ApiService) {}

    ngOnInit(): void {
      this._apiService.getAllProducts().subscribe(data => {
        console.log("Data de getAllProducts => ", data );
        this.productList = data;
      })
    }
}
