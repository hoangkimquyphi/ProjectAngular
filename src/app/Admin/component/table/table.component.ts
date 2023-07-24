import { Component } from '@angular/core';






import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data-type';

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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {



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
        console.log('Đã được sản phẩm thành công', product);
        alert(' Đã được sửa sản phẩm thành công');
      });

    }
}

//   ngOnInit(): void {
//     let productId = this.route.snapshot.paramMap.get('id');
//     console.warn(productId);
//     productId &&
//       this.product.getAllProducts(productId).subscribe((data) => {
//         console.warn(data);
//         this.productData = data;
//       });
//   }
//   submit(data: any) {
//     if (this.productData) {
//       data.id = this.productData.id;
//     }
//     this.product.editProduct(data).subscribe((result) => {
//       if (result) {
//         this.productMessage = 'Product has updated';
//       }
//     });
//     setTimeout(() => {
//       this.productMessage = undefined;
//     }, 3000);
//     console.warn(data);

  



