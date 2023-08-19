import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEnfantComponent } from './tab-enfant.component';

describe('TabEnfantComponent', () => {
  let component: TabEnfantComponent;
  let fixture: ComponentFixture<TabEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
