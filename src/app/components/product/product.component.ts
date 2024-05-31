import { Component, Input } from '@angular/core';
import { Product } from '../../../types';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, RatingModule, PaginatorModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Product;
}
