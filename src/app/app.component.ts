import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestClassComponent } from './test-class/test-class.component';
import { TestAttributeComponent } from './test-attribute/test-attribute.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, TestClassComponent, TestAttributeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
