import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../editdirectory/editdirectory.component';
import { Product } from '../addnewcategory/addnewcategory.component';






@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {



  
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
  

editProduct(product: Product) {}

// Delete(): void {
//   this.activatedRoute.params.subscribe(data  => {
//     this.categoryId = data['id'];
//     this.categoryService.deleteCategory(this.categoryId).subscribe((data) => {
      
//     })
//   });


Delete(): void {
  this.activatedRoute.params.subscribe(data => {
    const categoryId = data['id'];
    this.categoryService.deleteCategory(categoryId).subscribe(
      () => {
        // If the deletion was successful, navigate back to the category list page
        // this.router.navigate(['/categories']);
        alert('Category deleted successfully');
      },
      (error) => {
        // If the deletion failed, show an error message to the user
        alert('Failed to delete category: ' + error.message);
      }
    );
  });




}


}
