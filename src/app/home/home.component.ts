import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { Products, Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}
  products: Product[] = [];

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((products: Products) => {
        this.products = products.items;
        console.log(this.products);
      });
  }
  ngOnInit() {
    this.fetchProducts(0, 5);
  }
  // trackByItemId(index: number, product: Product): number {
  //   return product?.id;
  // }
}
