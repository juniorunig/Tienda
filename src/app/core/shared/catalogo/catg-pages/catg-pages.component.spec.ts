import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgPagesComponent } from './catg-pages.component';

describe('CatgPagesComponent', () => {
  let component: CatgPagesComponent;
  let fixture: ComponentFixture<CatgPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatgPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
