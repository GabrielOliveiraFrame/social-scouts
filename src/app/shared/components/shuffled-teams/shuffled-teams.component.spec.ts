import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffledTeamsComponent } from './shuffled-teams.component';

describe('ShuffledTeamsComponent', () => {
  let component: ShuffledTeamsComponent;
  let fixture: ComponentFixture<ShuffledTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuffledTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffledTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
