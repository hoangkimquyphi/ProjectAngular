import { Component,OnInit } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute } from '@angular/router';




export interface Product {
  id: number;
  name: string;
  quantity: number;
  status: string;
  price: number;
  category: string;
}
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent {
  [x: string]: any;
  lists : Product |any;
  productId = 0;
  onDeleteSuccess: any;
  router: any;
constructor(private activatedRoute: ActivatedRoute,private productService: ProductsService){

}
// getList() :Observable <any>{
//   const productUrl = 'http://localhost:9000/api/products';
//   return this.HttpClient.get<Product>(productUrl);
// }
ngOnInit(): void {
  this.productService.getAllProducts().subscribe((data) => {
    this.lists = data;
  });
}






getAllProduct() {
  return this.productService.getAllProducts().subscribe(
    (data)  => (this['product'] = data)
  );
}











deleteProduct(): void{
  this.activatedRoute.params.subscribe(data  => {
    this.productId = data['id'];
    this.productService.deleteProduct(this.productId).subscribe((data) => {

    

      console.log("Xóa sản phẩm thành công");
      // Hiển thị thông báo thành công
   
  

      this.productService.deleteProduct(this.productId).subscribe(
        (data) => {
          console.log(data); // in ra thông báo xóa sản phẩm thành công
          this['toastr'].success('Xóa sản phẩm thành công', 'Thành công');
        this.router.navigate(['/products']);




        });

    })
  });




  
}
  getProducts() {
    throw new Error('Method not implemented.');
  }
}
