import { Component } from '@angular/core';









import { CategoryService } from 'src/app/services/category.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from './category';








export interface Product {
  id: number;
  name: string;
  quantity: number;
  status: string;
  price: number;
  category: string;
}
@Component({
  selector: 'app-mathang',
  templateUrl: './mathang.component.html',
  styleUrls: ['./mathang.component.css']
})
export class MathangComponent {

  lists : any;
  categoryId = 0;
constructor(private activatedRoute: ActivatedRoute,private categoryService: CategoryService){

}
ngOnInit(): void {
  this.categoryService.getAllcategory().subscribe((data: any) => {
    this.lists = data;
  });
}

getCategory(){
  this.categoryService.getAllcategory().subscribe(
    (categories: Category[]) =>
  {
    this.lists= categories;
  }
  )
}
  
Delete(): void {
  this.activatedRoute.params.subscribe(data  => {
    this.categoryId = data['id'];
    this.categoryService.deleteCategory(this.categoryId).subscribe((data) => {
      
    })
  });
}
}
