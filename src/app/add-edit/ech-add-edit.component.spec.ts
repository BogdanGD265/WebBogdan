import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchAddEditComponent } from './ech-add-edit.component';

describe('EchAddEditComponent', () => {
  let component: EchAddEditComponent;
  let fixture: ComponentFixture<EchAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
