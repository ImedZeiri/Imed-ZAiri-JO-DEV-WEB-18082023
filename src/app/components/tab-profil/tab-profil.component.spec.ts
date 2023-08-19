import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProfilComponent } from './tab-profil.component';

describe('TabProfilComponent', () => {
  let component: TabProfilComponent;
  let fixture: ComponentFixture<TabProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
