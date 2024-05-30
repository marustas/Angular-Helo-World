import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { Products, Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}
  products: Product[] = [];
  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 3 })
      .subscribe((products: Products) => {
        this.products = products.items;
        console.log(products.items);
      });
  }
}
