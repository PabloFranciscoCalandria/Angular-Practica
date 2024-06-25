import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, productsList } from '../products/products.mock';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) {

  }

  ngOnInit(): void {
    // Lo haremos llamando al servicio no utilizando mock
    // setTimeout(() => {
    this._route.params.subscribe({
       next: (params: Params) => {
        // this.producto = this.productList.find(product => product.id == params['productId']);
          this._apiService.getProductById(Number(params['productId'])).subscribe({
            next: (data: IProduct) => {
              this.color = data?.price as number > 200 ? 'red' : '';
              this.loading = false;
              this.product = data;
            },
            error: (error: any) => {
                console.log(error);
            }
          });
        }
    });
    // }, 1500)
  }

}
