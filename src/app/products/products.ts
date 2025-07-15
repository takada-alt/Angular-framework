import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  prodcuts! : Array<any>;
  constructor(private productsService : ProductsService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productsService.getAllProducts().subscribe({
      next:res => {
        this.prodcuts=res;
      },
      error:err => {
        console.log(err);
      }
    });
  }
  handleDelete(product:any){
    let v = confirm('Are you sure you want to delete this product ?');
    if (v)
    {
      this.productsService.deleteProduct(product).subscribe({
        next:value => {
          this.getAllProducts();
        },
        error:err=>{
          console.log(err);
        }
      });
    }
  }
}
