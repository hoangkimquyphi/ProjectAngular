import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interface/IProduct';
import { WebApiService } from 'src/app/web-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit{

  constructor(private productService: WebApiService
    ){}

  ngOnInit(): void {

  }

  addNewProduct(form: any){
    const min = 1;
    const max = 1000000;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    let newProduct ={
      id: random,
      categoryId:form.value.product_category,
      name: form.value.name,
      description: form.value.product_description,
      brand: form.value.brand,
      price: form.value.product_price,
      image_url: form.value.image_url,
      material: form.value.material,
      color: form.value.product_color,
      quantity: form.value.quantity,
      

    };
    this.productService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    })
  }
}
