import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVideoCarouselComponent } from './image-video-carousel.component';

describe('ImageVideoCarouselComponent', () => {
  let component: ImageVideoCarouselComponent;
  let fixture: ComponentFixture<ImageVideoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageVideoCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageVideoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
