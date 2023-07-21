import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/products/product';
import { ProductsService } from 'src/app/products/products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  productList : Product | any;

  constructor(private productsService: ProductsService){};

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data =>{
      this.productList = data;
    })
  }

}
