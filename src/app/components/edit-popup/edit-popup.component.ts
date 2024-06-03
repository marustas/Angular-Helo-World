import { CommonModule } from '@angular/common';
import { Component, Output, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { EventEmitter } from 'stream';
import { Product } from '../../../types';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule, RatingModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.css',
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Output() confirm = new EventEmitter<any>();

  @Input() product: Product = {
    name: '',
    image: '',
    price: '',
    rating: 0,
  };

  onConfirm() {
    this.confirm.emit(this.product);
  }

  onCancel() {
    this.display = false;
  }
}
