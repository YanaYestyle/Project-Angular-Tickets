import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartForTimeCityWeatherComponent } from './part-for-time-city-weather.component';

describe('PartForTimeCityWeatherComponent', () => {
  let component: PartForTimeCityWeatherComponent;
  let fixture: ComponentFixture<PartForTimeCityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartForTimeCityWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartForTimeCityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
