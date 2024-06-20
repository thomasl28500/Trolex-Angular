import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCatalogueComponent } from './more-catalogue.component';

describe('MoreCatalogueComponent', () => {
  let component: MoreCatalogueComponent;
  let fixture: ComponentFixture<MoreCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreCatalogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
