import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';







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
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css']
})
export class AddnewproductComponent {
  [x: string]: any;
  constructor(private productService: ProductsService){}

  product: Product[] |any = {
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
    this.productService.addProduct(this.product)
      .subscribe(product => {
        console.log('Thêm sản phẩm thành công', product);
        alert('Thêm sản phẩm thành công');
      });
}
}


