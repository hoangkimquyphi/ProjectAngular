import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';




export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  brand: string;
  color: string;
  material: string;
  quantity: string;
  category_id: string;
  image_url: string;
  
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {



  [x: string]: any;
  lists : any|Product[];
  productId = 0;
  onDeleteSuccess: any;
  
products:any[]=[];

  // currentPage: number = 1;
constructor(private activatedRoute: ActivatedRoute,private productService: ProductsService, private router: Router ){
  
  // this.loadProducts();
}
// getList() :Observable <any>{
//   const productUrl = 'http://localhost:9000/api/products';
//   return this.HttpClient.get<Product>(productUrl);
// }
ngOnInit(): void {
  // this.productId = data['id'];
  this.productService.getProduct().subscribe(data =>{
    this.lists = data;
  })
}

// loadProducts() {
//   this.productService.getAllProducts().subscribe(
//     (response: any) => {
//       console.log(response); // In ra response để kiểm tra định dạng của chuỗi JSON
//       this.products = response;
//     },
//     (error: any) => {
//       console.error('Error loading products', error);
//       alert('Error loading products');
//     }
//   );
// }


// getAllProduct() {
//   return this.productService.getAllProducts().subscribe(
//     (data)  => (this['product'] = data)
//   ); 
// }

// loadProducts() {
//   this.productService.getProduct().subscribe(
//     products => {
//       this.products = products;
//     },
//     error => {
//       console.error('Error loading products', error);
//       // Display an error message to the user
//       alert('Error loading products');
//     }
//   );
// }

deleteProduct(productId: number) {
  this.productService.deleteProduct(productId).subscribe(
    (response: any) => {
      console.log(response);
      // Remove deleted product from list
       this.lists.filter((item: { id: number; }) => item.id !== productId);
      // Show success message
      this.showMessage('Product has been deleted');
    },
    (error: any) => {
      console.error('Error deleting product', error);
      // Show error message
      this.showMessage('Error deleting product');
    }
  );
}

showMessage(message: string) {
  // TODO: Implement a better way to show messages
  alert(message);
}
    
  // )  
  // }
  // list(){
  //   this.productService.getProduct().subscribe((resuft)=>{
  //     if(resuft){
  //       this.lists = resuft;
  //     }
  //   })
  // }














  






// ngOnInit() {
//   this.activatedRoute.params.subscribe(data => {
   
//     this.productService.getProduct(this.productId).subscribe(product => {
//       this.product = product;
//     });
//   });
// }

// deleteProduct() :void {
//   this.productService.deleteProduct(this.productId).subscribe(() => {
//     console.log("Xóa sản phẩm thành công");
//     this.router.navigate(['/products']);
//     // Hiển thị thông báo thành công
//   }, error => {
//     console.error(error);
//     // Xử lý lỗi khi xóa sản phẩm thất bại hoặc có lỗi xảy ra khi gọi API xóa sản phẩm



//   });


}




