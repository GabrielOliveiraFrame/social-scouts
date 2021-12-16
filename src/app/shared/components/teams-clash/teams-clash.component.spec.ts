import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsClashComponent } from './teams-clash.component';

describe('TeamsClashComponent', () => {
  let component: TeamsClashComponent;
  let fixture: ComponentFixture<TeamsClashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsClashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsClashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
