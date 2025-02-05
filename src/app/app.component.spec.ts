import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './components/nav/nav.component';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule, NavComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nav component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-nav')).toBeTruthy();
  });

  it('should render router outlet', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should render footer with copyright', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer')?.textContent).toContain('© 2024 MyApp');
  });
});