import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

export class TestComponent {
public isRed = false;
public setRed(){
  this.isRed = !this.isRed;
}
}
