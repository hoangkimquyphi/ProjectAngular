import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { CartService } from '../cardservice.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit{

  productList : Product | any;
  products: Product[] = [];

  constructor(private productsService: ProductsService,private cartService: CartService){};

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data =>{
      this.productList = data;
     
    })
  }
  

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Sản phẩm đã được thêm vào giỏ hàng');
  }

}



