import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcommentsComponent } from './item-comments.component';

describe('ItemcommentsComponent', () => {
  let component: ItemcommentsComponent;
  let fixture: ComponentFixture<ItemcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
