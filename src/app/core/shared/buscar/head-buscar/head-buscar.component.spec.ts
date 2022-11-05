import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBuscarComponent } from './head-buscar.component';

describe('HeadBuscarComponent', () => {
  let component: HeadBuscarComponent;
  let fixture: ComponentFixture<HeadBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
