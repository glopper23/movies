import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualArtifactsComponent } from './visual-artifacts.component';

describe('AudioArtifactsComponent', () => {
  let component: VisualArtifactsComponent;
  let fixture: ComponentFixture<VisualArtifactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualArtifactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualArtifactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
