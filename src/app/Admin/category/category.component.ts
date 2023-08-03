import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_service/category.service';
import { Category } from 'src/app/class/category';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

declare var window: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  listCategory: any;
  categoryForm !: FormGroup;
  editingCategory: any;
  modalForm : any;
  deleteId !: number;

  constructor(private categoryService: CategoryService,public fb: FormBuilder){
    this.categoryForm = this.fb.group({
      name: ['']
    });

  }

  ngOnInit(): void {
    this.getListCategory();
    this.modalForm = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  getListCategory(){
    this.categoryService.getListCategory().subscribe({
      next: res =>{
        this.listCategory = res;
      }
    })
  }

  // getCategoryById(id: number){
  //   this.categoryService.getCategoryById(id).subscribe({  
  //     next: res =>{
  //       this.category = res;
  //     }
  //   })
  // }

  onSubmit(){
    const data: Category = {
      name : this.categoryForm.get('name')!.value
    };
    if(this.editingCategory){
      this.categoryService.updateCategory(this.editingCategory.id,data).subscribe({
        next: res =>{
          console.log("success");
          this.getListCategory();
        },error: err=>{
          console.log(err);
        }
      })
    } else{
      this.categoryService.createCategory(data).subscribe({
        next: res =>{
          console.log("success");
          this.getListCategory();
        },error: err =>{
          console.log(err);
        }
      })
    }
    this.resetForm();
    this.hideModel();
  }

  editCategory(data: any) {
    this.editingCategory = data;
    
    this.categoryForm.patchValue({
      name: data.name
    });
  }

  getDeleteId(id: any){
    this.deleteId = id;
  }

  deleteCategory(){
    this.categoryService.deleteCategory(this.deleteId).subscribe(res =>{
      this.getListCategory();
    })
  }


  resetForm() {
    this.editingCategory = null;
    this.categoryForm.reset();
  }

  hideModel(){
    this.modalForm.hide();
  }


}
