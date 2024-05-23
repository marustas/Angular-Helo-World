import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAttributeComponent } from './test-attribute.component';

describe('TestAttributeComponent', () => {
  let component: TestAttributeComponent;
  let fixture: ComponentFixture<TestAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAttributeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
