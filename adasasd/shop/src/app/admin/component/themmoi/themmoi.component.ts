import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  brand: string;
  color: string;
  material: string;
  quantity: string;
  category_id: string;
  image_url: string;
}
@Component({
  selector: 'app-themmoi',
  templateUrl: './themmoi.component.html',
  styleUrls: ['./themmoi.component.css']
})
export class ThemmoiComponent {
  [x: string]: any;
  constructor(private productService: ProductService){}

  product: Product[] | any = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    brand: '',
    color: '',
    material: '',
    quantity: '',
    category_id: '',
    image_url:'',
  };


  ngOnInit(): void {
  }

  onSubmit(): void {
    this.productService.addP(this.product)
      .subscribe((product: any) => {
        console.log('Thêm sản phẩm thành công', product);
        alert('Thêm sản phẩm thành công');
      });
}
}