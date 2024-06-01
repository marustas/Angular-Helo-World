import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { Products, Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { error } from 'node:console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}
  products: Product[] = [];
  totalRecords: number = 0;
  rows: number = 5;

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((products: Products) => {
        this.products = products.items;
        console.log(this.products);
        this.totalRecords = products.total;
      });
  }

  editProduct(product: Product, id: number) {
    this.productsService
      .editProduct(`http://localhost:3000/${id}`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  addProduct(product: Product, id: number) {}

  deleteProduct(product: Product, id: number) {}

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
  // trackByItemId(index: number, product: Product): number {
  //   return product?.id;
  // }
}
