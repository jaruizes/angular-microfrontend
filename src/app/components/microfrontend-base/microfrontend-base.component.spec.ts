import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontendBaseComponent } from './main.component';

describe('MainComponent', () => {
  let component: MicrofrontendBaseComponent;
  let fixture: ComponentFixture<MicrofrontendBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrofrontendBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofrontendBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
