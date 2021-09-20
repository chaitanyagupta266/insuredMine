import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGalleryLinkComponent } from './view-gallery-link.component';

describe('ViewGalleryLinkComponent', () => {
  let component: ViewGalleryLinkComponent;
  let fixture: ComponentFixture<ViewGalleryLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGalleryLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGalleryLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
