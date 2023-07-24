import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';





export interface Category {
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
  selector: 'app-editdirectory',
  templateUrl: './editdirectory.component.html',
  styleUrls: ['./editdirectory.component.css']
})
export class EditdirectoryComponent {


  [x: string]: any;
  constructor(private productService: CategoryService){}

  product: Category[] |any = {
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

  // ngOnInit(): void {
  // }

  // onSubmit(): void {
  //   this.productService.editcategory(this.product)
  //     .subscribe(product => {
  //       console.log('Thêm sản phẩm thành công', product);
  //       alert('Thêm sản phẩm thành công');
  //     });

 

  

  editcategory(product: any): Observable<any> {
    const url = `${this['apiUrl']}/${product.id}`;
    return this['HttpClient'].put(url, product);
  }


  onSubmit(): void {
    // Chỉnh sửa category của sản phẩm
    this.product.category = 'new-category';

    // Gọi phương thức editcategory() của service để lưu thay đổi
    this.productService. editCategory(this.product)
      .subscribe((product: any) => {
        console.log('Chỉnh sửa sản phẩm thành công', product);
        alert('Chỉnh sửa sản phẩm thành công');
      });





      
  

  }
}

  function deleteCategory(id: any, number: any) {
    throw new Error('Function not implemented.');
  }



