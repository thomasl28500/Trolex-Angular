import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAvisComponent } from './more-avis.component';

describe('MoreAvisComponent', () => {
  let component: MoreAvisComponent;
  let fixture: ComponentFixture<MoreAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreAvisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
