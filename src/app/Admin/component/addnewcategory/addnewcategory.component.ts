import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';


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
  selector: 'app-addnewcategory',
  templateUrl: './addnewcategory.component.html',
  styleUrls: ['./addnewcategory.component.css']
})
export class AddnewcategoryComponent {

  [x: string]: any;
  constructor(private categoryService: CategoryService){}

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
    this.categoryService.  addCategory(this.product)
      .subscribe((category: any) => {
        console.log('Thêm sản phẩm thành công', category);
        alert('Thêm sản phẩm thành công');
      });
}


}
